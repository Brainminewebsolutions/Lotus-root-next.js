"use client";

import { useRef, useState } from "react";
import { uploadImage } from "../../../_actions/posts";
import styles from "../../../admin.module.css";

type Props = {
  url: string;
  onChange: (url: string) => void;
  emptyText?: string;
};

// Click-or-drop image uploader. Uploads to the database (media table) via the
// uploadImage server action and hands back the /media/<id> URL.
export default function ImageField({ url, onChange, emptyText = "Click or drop an image here (max 4 MB)" }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const upload = async (file: File) => {
    setError("");
    if (file.size > 4 * 1024 * 1024) {
      setError("Image is larger than 4 MB. Compress it (e.g. squoosh.app) and try again.");
      return;
    }
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const result = await uploadImage(fd);
      if (result.ok) onChange(result.url);
      else setError(result.error);
    } catch (err) {
      // A thrown action (network drop, request too large, expired session) must not leave the field stuck on "Uploading...".
      console.error("[ImageField upload]", err);
      setError("Upload failed. Check your connection and that you are still signed in, then try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="" className={styles.imagePreview} />
      ) : (
        <div
          className={styles.dropZone}
          role="button"
          tabIndex={0}
          onClick={() => input.current?.click()}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && input.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (file) void upload(file);
          }}
        >
          {busy ? "Uploading…" : emptyText}
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.row} style={{ gap: 6 }}>
        <button type="button" className={styles.button} disabled={busy} onClick={() => input.current?.click()}>
          {busy ? "Uploading…" : url ? "Replace image" : "Upload image"}
        </button>
        {url && (
          <button type="button" className={`${styles.buttonLink} ${styles.buttonLinkDanger}`} onClick={() => onChange("")}>
            Remove
          </button>
        )}
      </div>
      <input
        ref={input}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (file) void upload(file);
        }}
      />
    </div>
  );
}
