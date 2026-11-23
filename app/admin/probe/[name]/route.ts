// TEMPORARY diagnostic route. Remove after use.
export async function GET(_req: Request, ctx: { params: Promise<{ name: string }> }) {
  const { name } = await ctx.params;
  try {
    let keys: string[] = [];
    switch (name) {
      case "sanitize": keys = Object.keys(await import("@/lib/sanitize")); break;
      case "posts-lib": keys = Object.keys(await import("@/lib/posts")); break;
      case "schema": keys = Object.keys(await import("@/lib/schema")); break;
      case "slug": keys = Object.keys(await import("@/lib/slug")); break;
      case "validation": keys = Object.keys(await import("../../_actions/validation")); break;
      case "actions": keys = Object.keys(await import("../../_actions/posts")); break;
      case "sanitize-run": {
        const m = await import("@/lib/sanitize");
        keys = [m.sanitizePostHtml("<p onclick=x>hi</p>")];
        break;
      }
      default: return Response.json({ name, error: "unknown" }, { status: 404 });
    }
    return Response.json({ name, ok: true, keys });
  } catch (err) {
    const e = err as { code?: string; message?: string; stack?: string };
    return Response.json({ name, ok: false, code: e?.code, message: e?.message, stack: e?.stack?.split("\n").slice(0, 6) }, { status: 500 });
  }
}
