import type { Metadata } from "next";
import styles from "./admin.module.css";
import SmoothScroll from "./SmoothScroll";

// The admin always reads live data behind a login, so it is allowed to block on
// navigation (opts out of the "instant navigation" dev check).
export const instant = false;

export const metadata: Metadata = {
  title: "Admin | Lotus Roots",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.root}>
      {/* Apply the saved dark/light choice before first paint (no flash). */}
      <script
        dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem("lrt-admin-theme");document.documentElement.setAttribute("data-admin-theme",t==="light"?"light":"dark")}catch(e){}`,
        }}
      />
      <SmoothScroll />
      {children}
    </div>
  );
}
