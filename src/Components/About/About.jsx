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
      <div className={`${style.about_container} ${inView ? style.inView : ""}`} ref={ref}>
        <div className={style.about_left}>
          <div className={style.top}>
            <h2 className={style.title}>Про нас</h2>
            <hr className={style.hr} />
            <p>VIANN — твій простір сили та стилю...</p>
            <hr className={style.hr} />
            <div className={style.likes}>
              {likes.map((text, i) => <LikeItem key={i} text={text} index={i} />)}
            </div>
          </div>
          <Button href="https://www.instagram.com/viann_ua/" inView={inView}>
            Більше фото в Instagram
          </Button>
        </div>
        <div className={style.about_right}>
          <img src="/photo7.jpg" alt="VIANN" />
        </div>
      </div>
    </div>
  );
}