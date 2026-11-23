import { getCurrentStaff } from "@/lib/auth";
import { savePost, type PostInput, type SaveResult } from "../_actions/posts";

// Saves/publishes a post as a plain route handler (same approach as
// /admin/upload-image): always answers JSON with the real failure reason
// instead of a generic server-action 500. Lives under /admin/ because the
// session cookie is scoped to that path. All validation stays in savePost().
const json = (body: SaveResult, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const site = request.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return json({ ok: false, error: "Cross-site request refused." }, 403);

  try {
    if (!(await getCurrentStaff())) {
      return json({ ok: false, error: "You are signed out. Reload the page and log in again." }, 401);
    }
    const raw = (await request.json()) as PostInput;
    return json(await savePost(raw));
  } catch (err) {
    console.error("[admin save-post]", err);
    const e = err as { code?: string; message?: string };
    return json({ ok: false, error: `Save failed (${e?.code || e?.message || "unknown error"}).` }, 500);
  }
}
