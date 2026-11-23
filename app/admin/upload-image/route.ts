import { getCurrentStaff } from "@/lib/auth";
import { exec } from "@/lib/db";
import { MAX_IMAGE_BYTES, sniffImage } from "@/lib/image-upload";

// Admin image upload as a plain route handler. Always answers with JSON
// ({ ok, url } or { ok: false, error }) so failures show their real reason
// instead of a generic server-action 500. The session cookie is scoped to
// /admin, which is why this lives under /admin/.
const json = (body: { ok: true; url: string } | { ok: false; error: string }, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

const describe = (err: unknown) => {
  const e = err as { code?: string; message?: string };
  return e?.code || e?.message || "unknown error";
};

export async function POST(request: Request) {
  // Same-origin only (the session cookie is SameSite=Lax, this is defence in depth).
  const site = request.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return json({ ok: false, error: "Cross-site upload refused." }, 403);

  let staff;
  try {
    staff = await getCurrentStaff();
  } catch (err) {
    console.error("[admin upload-image] session", err);
    return json({ ok: false, error: `Could not verify your session (${describe(err)}).` }, 500);
  }
  if (!staff) return json({ ok: false, error: "You are signed out. Reload the page and log in again." }, 401);

  let file: FormDataEntryValue | null;
  try {
    file = (await request.formData()).get("file");
  } catch (err) {
    console.error("[admin upload-image] formData", err);
    return json({ ok: false, error: `Could not read the upload (${describe(err)}).` }, 400);
  }
  if (!(file instanceof Blob) || file.size === 0) return json({ ok: false, error: "No file received." }, 400);
  if (file.size > MAX_IMAGE_BYTES) {
    return json({ ok: false, error: "Image is larger than 4 MB. Compress it (e.g. squoosh.app) and try again." }, 413);
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const kind = sniffImage(bytes);
  if (!kind) return json({ ok: false, error: "Only JPG, PNG, WebP, GIF or AVIF images are allowed." }, 415);

  try {
    const res = await exec("INSERT INTO media (mime, size, data, created_by, created_at) VALUES (?, ?, ?, ?, ?)", [
      kind.mime,
      bytes.length,
      Buffer.from(bytes),
      staff.id,
      new Date(),
    ]);
    return json({ ok: true, url: `/media/${res.insertId}` });
  } catch (err) {
    console.error("[admin upload-image] insert", err);
    return json({ ok: false, error: `Upload failed (database error: ${describe(err)}). Check that the media table exists.` }, 500);
  }
}
