export type UploadResult = { ok: true; url: string } | { ok: false; error: string };

// Uploads an image to /admin/upload-image and always resolves (never throws).
export async function uploadImageFile(file: File): Promise<UploadResult> {
  try {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/admin/upload-image", { method: "POST", body: fd, credentials: "same-origin" });
    let data: UploadResult | null = null;
    try {
      data = (await res.json()) as UploadResult;
    } catch {
      // Non-JSON reply: usually a redirect to the login page (session expired) or a platform error page.
    }
    if (data && typeof data.ok === "boolean") return data;
    if (res.redirected || res.status === 401) return { ok: false, error: "You are signed out. Reload the page and log in again." };
    return { ok: false, error: `Upload failed (server returned ${res.status}).` };
  } catch (err) {
    console.error("[uploadImageFile]", err);
    return { ok: false, error: "Upload failed. Check your connection and try again." };
  }
}
