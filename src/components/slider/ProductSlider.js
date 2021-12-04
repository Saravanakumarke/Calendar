import React, { useState } from "react";
import styles from "./slider.module.css";
import BtnSlider from "./Controls";
import { BsFillStarFill } from "react-icons/bs";

export default function Slider(props) {
  const { slideimages } = props;
  const size = props.size || "sm";
  const dot = props.dot || false;

  const [slideIndex, setSlideIndex] = useState(1);
  const [val, setval] = useState(0);

  const nextSlide = () => {
    if (slideIndex === slideimages.length) {
      setSlideIndex(1);
      setval(0);
    } else {
      setSlideIndex(slideIndex + 1);
      setval(val + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(slideimages.length);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <>
      <div
        className={
          size === "sm" ? `${styles.smallslider}` : `${styles.largeslider}`
        }
      >
        {" "}
        <div className={styles.rating}>
          {slideimages[val].rating.map((x, index) => (
            <BsFillStarFill color="yellow" size={27} />
          ))}
        </div>
        {slideimages.map((x, index) => {
          return (
            <>
              <div
                key={index}
                className={
                  slideIndex === index + 1
                    ? `${styles.slide} ${styles.activeanim}`
                    : `${styles.slide}`
                }
              >
                <img src={x.imgurl} alt="slider-img" />
              </div>
            </>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        {dot === true ? (
          <div className={styles.containerdots}>
            {slideimages[val].legends.map((x, index) => (
              <div className={styles.dot} style={{ background: `${x.color}` }}>
                {x.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
