import styles from "./Header.module.css";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className={styles.header_container}>
      <div ref={ref} className={styles.header_content}>
        <h1 className={inView ? styles.show : ""}>VIANN</h1>
        <div className={styles.centre}>
          <h2 className={inView ? styles.show : ""}>
            VIANN — магазин жіночого одягу для фітнесу
          </h2>
          <p className={inView ? styles.show : ""}>
            твій простір сили та стилю
          </p>
        </div>
        <div className={styles.end}>
          <p className={inView ? styles.show : ""}>
            КОМФОРТ,СТИЛЬ,ЕФИКТИВНОСТЬ
          </p>
          <button className={inView ? styles.show : ""}>
            <a href="https://www.instagram.com/viann_ua/" target="_blank">
              Смотреть каталог в Instagram
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
