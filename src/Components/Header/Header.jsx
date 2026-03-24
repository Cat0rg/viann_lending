import Button from "../Button/Button";
import styles from "./Header.module.css";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <header className={styles.header_container}>
      <div ref={ref} className={styles.header_content}>
        <h1 className={`${styles.logoWrapper} ${inView ? styles.show : ""}`}>
          <img
            fetchpriority="high"
            src="/logo1.webp"
            alt="VIANN"
            width={100}
            height={100}
            className={`${styles.logo} ${styles.mobile}`}
          />
          <img
            fetchpriority="high"
            src="/logo.webp"
            alt="VIANN"
            width={320}
            height={320}
            className={`${styles.logo} ${styles.desktop}`}
          />
        </h1>

        <div className={styles.center}>
          <h2 className={inView ? styles.show : ""}>
            VIANN — магазин жіночого одягу для фітнесу
          </h2>
          <p className={inView ? styles.show : ""}>
            Простір де стиль поєднується з комфортом.
          </p>
        </div>

        <div className={styles.end}>
          <Button
            className={styles.button}
            href="https://www.instagram.com/viann_ua/"
            inView={inView}
          >
            Дивитись Instagram
          </Button>
        </div>
      </div>
    </header>
  );
}
