import { FcLike } from "react-icons/fc";
import { useInView } from "react-intersection-observer";
import style from "./About.module.css";
import Button from "../Button/Button";

const LikeItem = ({ text, index }) => (
  <div className={`${style.fcItem} ${style[`item${index}`]}`}>
    <FcLike /> <span>{text}</span>
  </div>
);

export default function About() {
  const likes = ["Висока якість", "Трендові моделі", "Зручне розташування"];
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div className={style.container}>
      <div
        className={`${style.about_container} ${inView ? style.inView : ""}`}
        ref={ref}
      >
        <div className={style.about_left}>
          <div className={style.top}>
            <h2 className={style.title}>Про нас</h2>
            <hr className={style.hr} />
            <p>
              VIANN — простір жіночого фітнес-одягу для тих, хто цінує комфорт,
              стиль та якість. У нас ти знайдеш ідеальні образи для спорту та
              активного способу життя.
            </p>
            <hr className={style.hr} />
            <div className={style.likes}>
              {likes.map((text, i) => (
                <LikeItem key={i} text={text} index={i} />
              ))}
            </div>
          </div>
          <Button href="https://www.instagram.com/viann_ua/" inView={inView}>
            Більше фото в Instagram
          </Button>
        </div>
        <div className={style.about_right}>
          <img src="/photo_about.webp" alt="VIANN" />
        </div>
      </div>
    </div>
  );
}
