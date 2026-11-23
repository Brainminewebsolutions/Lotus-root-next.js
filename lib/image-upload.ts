export const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

// Identify the real file type from its first bytes - the browser-supplied
// MIME type and file extension are attacker-controlled and not trusted.
export function sniffImage(bytes: Uint8Array): { mime: string } | null {
  const ascii = (start: number, end: number) => String.fromCharCode(...bytes.slice(start, end));
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return { mime: "image/jpeg" };
  if (bytes[0] === 0x89 && ascii(1, 4) === "PNG") return { mime: "image/png" };
  if (ascii(0, 4) === "GIF8") return { mime: "image/gif" };
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return { mime: "image/webp" };
  if (ascii(4, 8) === "ftyp" && ["avif", "avis"].includes(ascii(8, 12))) return { mime: "image/avif" };
  return null;
}
