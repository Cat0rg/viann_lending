import { useState, useRef } from "react";
import style from "./OurModels.module.css";
import { useInView } from "react-intersection-observer";
import Button from "../Button/Button";

import img1 from "../../assets/photo1.jpg";
import img2 from "../../assets/photo2.jpg";
import img3 from "../../assets/photo3.jpg";
import img4 from "../../assets/photo4.jpg";
import img5 from "../../assets/photo5.jpg";
import img6 from "../../assets/photo6.jpg";
import img7 from "../../assets/photo7.jpg";
import img8 from "../../assets/photo8.jpg";

const Slide = ({ path, indx }) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  return (
    <div
      ref={ref}
      className={`${style.albom_slide} ${inView ? style.active_slide : ""}`}
    >
      <img
        className={style.albom_image}
        src={path}
        alt={`Модель ${indx + 1}`}
        loading="lazy"
      />
    </div>
  );
};

export default function OurModels() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });

  const handleScroll = (event) => {
    const container = event.target;
    const itemWidth = container.querySelector(
      `.${style.albom_slide}`,
    ).offsetWidth;
    const index = Math.round(container.scrollLeft / (itemWidth + 15));
    if (index !== currentSlide) setCurrentSlide(index);
  };

  return (
    <section className={style.container} ref={sectionRef}>
      <h3 className={style.title}>Наші моделі</h3>
      <div className={style.albom_wrapper}>
        <div className={style.albom} onScroll={handleScroll}>
          {images.map((path, i) => (
            <Slide key={i} path={path} indx={i} />
          ))}
        </div>
      </div>
      <div className={style.pagination}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${style.dot} ${currentSlide === i ? style.activeDot : ""}`}
          />
        ))}
      </div>
      <div className={style.btn}>
        <Button href="https://www.instagram.com/viann_ua/" inView={inView}>
          Більше фото в Instagram
        </Button>
      </div>
    </section>
  );
}
