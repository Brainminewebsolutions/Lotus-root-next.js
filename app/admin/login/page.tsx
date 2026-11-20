import { redirect } from "next/navigation";
import { getCurrentStaff } from "@/lib/auth";
import LoginForm from "./LoginForm";
import styles from "../admin.module.css";

export default async function AdminLoginPage() {
  if (await getCurrentStaff()) redirect("/admin/");

  return (
    <div className={styles.loginWrap}>
      <div className={`${styles.card} ${styles.loginCard}`}>
        <div className={styles.loginLogo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/LRT-logo.avif" alt="Lotus Roots Technologies" width={96} height={96} />
          <span className={styles.loginTitle}>
            Lotus <b>Roots</b> Technologies
          </span>
          <span className={styles.brandSub}>Website admin</span>
        </div>
        <div className={styles.loginBody}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
