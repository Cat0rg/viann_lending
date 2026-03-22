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
        <h2 className={inView ? styles.show : ""}>VIANN — магазин жіночого одягу для фітнесу</h2>
        <p className={inView ? styles.show : ""}>твій простір сили та стилю</p>
        <button className={inView ? styles.show : ""}>Смотреть каталог в Instagram</button>
      </div>
    </div>
  );
}