import { useState, useRef } from "react";
import style from "./OurModels.module.css";
import { useInView } from "react-intersection-observer";
import Button from "../Button/Button";

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
  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
  ];
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
      <h3 className={style.title}>Наши модели</h3>
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
