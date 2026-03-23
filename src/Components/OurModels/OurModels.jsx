import { useState, useRef } from "react";
import style from "./OurModels.module.css";
import { useInView } from "react-intersection-observer";

const Slide = ({ path, indx }) => {
  const { ref, inView } = useInView({
    threshold: 0.8, 
  });

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
  const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg", "/photo5.jpg", "/photo6.jpg", "/photo7.jpg", "/photo8.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  const { ref: buttonRef, inView: buttonVisible } = useInView({
    threshold: 0.2,
  });

  const handleScroll = (event) => {
    const container = event.target;
    const itemWidth = container.querySelector(`.${style.albom_slide}`).offsetWidth;
    const gap = 15;
    const index = Math.round(container.scrollLeft / (itemWidth + gap));
    if (index !== currentSlide) setCurrentSlide(index);
  };

  return (
    <section className={style.container}>
      <h3 className={style.title}>Наши модели </h3>

      <div className={style.albom_wrapper}>
        <div className={style.albom} onScroll={handleScroll} ref={scrollRef}>
          {images.map((path, indx) => (
            <Slide key={indx} path={path} indx={indx} />
          ))}
        </div>
      </div>

      <div className={style.pagination}>
        {images.map((_, indx) => (
          <span key={indx} className={`${style.dot} ${currentSlide === indx ? style.activeDot : ""}`} />
        ))}
      </div>

      <a ref={buttonRef} href="https://www.instagram.com/viann_ua/" target="_blank" rel="noopener noreferrer"
        className={`${style.button} ${buttonVisible ? style.showButton : ""}`}>
        Більше фото в Instagram
      </a>
    </section>
  );
}