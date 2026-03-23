import Button from "../Button/Button";
import styles from "./Header.module.css";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div className={styles.header_container}>
      <div ref={ref} className={styles.header_content}>
        
        <h1 className={`${styles.logoWrapper} ${inView ? styles.show : ""}`}>
          <img src="/Logo.png" alt="VIANN" className={styles.logo} />
        </h1>
        
        <div className={styles.center}>
          <h2 className={inView ? styles.show : ""}>VIANN — магазин жіночого одягу для фітнесу</h2>
          <p className={inView ? styles.show : ""}>твій простір сили та стилю</p>
        </div>
        
        <div className={styles.end}>
          <p className={inView ? styles.show : ""}>КОМФОРТ, СТИЛЬ, ЕФЕКТИВНІСТЬ</p>
          <Button className={styles.button} href="https://www.instagram.com/viann_ua/" inView={inView}>
            Смотреть каталог в Instagram
          </Button>
        </div>
      </div>
    </div>
  );
}