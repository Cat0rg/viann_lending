import styles from "./Footer.module.css";
import { LiaInstagram } from "react-icons/lia";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.title}>Контакты</h3>

        <div className={styles.content}>
          <a href="tel:+380951373195" className={styles.phoneLink}>
            +380 95 137 31 95
          </a>

<div className={styles.socials}>
            <a href="https://www.instagram.com/viann_ua/" className={styles.socialIcon}>
              <LiaInstagram size={28} className={styles.instIcon} /> 
              <span>@Vian_ua</span>
            </a>
          </div>

<a href="https://t.me/mm_hdhd" className={styles.tgButton}>
            <FaTelegramPlane size={24} className={styles.tgIcon} /> 
            <span>Написать в Telegram</span>
          </a>
        </div>

        <p className={styles.copyright}>© 2026 VIANN. Все права защищены.</p>
      </div>
    </footer>
  );
}