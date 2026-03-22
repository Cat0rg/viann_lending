import { FcLike } from "react-icons/fc";
import { useInView } from "react-intersection-observer";
import style from "./About.module.css";

export default function About() {
  const likes = ["Высокое качество", "Трендовые модели", "Удобное расположение"];

  return (
    <div className={style.container}>
      <div className={style.about_container}>
        <div className={style.about_left}>
          <h2 className={style.title}>О нас</h2>
          <hr className={style.hr} />
          <p>
            VIANN — твій простір сили та стилю. Жіночий фітнес-одяг, який
            мотивує рухатись вперед, виглядати бездоганно та відчувати себе
            впевнено кожного дня.
          </p>
          <hr className={style.hr} />
          <div className={style.likes}>
            {likes.map((text, i) => {
              const { ref, inView } = useInView({
                triggerOnce: false, // срабатывает только один раз
                threshold: 0.3,    // 30% элемента должно быть видно
              });

              return (
                <div
                  key={i}
                  ref={ref}
                  className={`${style.fcItem} ${inView ? style.showItem : ""}`}
                >
                  <FcLike /> <span>{text}</span>
                </div>
              );
            })}
          </div>
          <button className={style.button}>Больше фото в Instagram</button>
        </div>
        <div className={style.about_right}>
          <img src="photo7.jpg" alt="VIANN" />
        </div>
      </div>
    </div>
  );
}