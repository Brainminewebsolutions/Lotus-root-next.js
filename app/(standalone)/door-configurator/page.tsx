"use client";

// Note: Metadata for this page is defined in layout.tsx

export default function DoorConfiguratorPage() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen m-0 p-0 overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      <iframe
        src="http://46.62.155.60/doorworld"
        width="100%"
        height="100%"
        frameBorder={0}
        className="border-none m-0 p-0 block"
        style={{ border: "none", margin: 0, padding: 0, display: "block" }}
        title="Door Configurator Tool"
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  );
}
