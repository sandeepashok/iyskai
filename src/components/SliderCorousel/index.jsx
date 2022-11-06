import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import "./index.css";

const delay = 2500;

const CoruselContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const weaponDetails = [
  {
    id: 1,
    imgURL: "/assets/sai.webp",
    title: "Sai",
    altText: "sai",
  },
  {
    id: 2,
    imgURL: "assets/nunchaku.jpg",
    title: "Nunchaku",
    altText: "nunchaku",
  },
  {
    id: 3,
    imgURL: "assets/bo.jpg",
    title: "Bo (Staff)",
    altText: "bo",
  },
  {
    id: 4,
    imgURL: "assets/tanfa.jpg",
    title: "Tanfa",
    altText: "tanfa",
  },
  {
    id: 5,
    imgURL: "assets/kama.jpg",
    title: "Kama",
    altText: "kama",
  },
];

const SliderCorousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === weaponDetails.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {weaponDetails.map(({ imgURL, altText, title }, index) => {
          return (
            <>
              <CoruselContainer>
                <img src={imgURL} alt={altText} key={index} className="slide" />
                <b>{title}</b>
              </CoruselContainer>
            </>
          );
        })}
      </div>

      <div className="slideshowDots">
        {weaponDetails.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderCorousel;
