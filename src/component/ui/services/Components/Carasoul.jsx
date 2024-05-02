
// import Carousel from "react-spring-3d-carousel";
// import { useState, useEffect } from "react";
// import { config } from "react-spring";

// export default function Carroussel(props) {
//   const table = props.cards.map((element, index) => {
//     return { ...element, onClick: () => setGoToSlide(index) };
//   });

//   const [offsetRadius, setOffsetRadius] = useState(4); 
//   const [showArrows, setShowArrows] = useState(false);
//   const [goToSlide, setGoToSlide] = useState(null);
//   const [cards, setCards] = useState(table);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     setOffsetRadius(props.offset);
//     setShowArrows(props.showArrows);
//   }, [props.offset, props.showArrows]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGoToSlide((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [cards]);

//   useEffect(() => {
//     setCurrentIndex(goToSlide);
//   }, [goToSlide]);

//   return (
//     <div
//       style={{ width: props.width, height: props.height, margin: props.margin }}
//     >
//       <Carousel
//         slides={cards}
//         goToSlide={goToSlide}
//         offsetRadius={offsetRadius}
//         showNavigation={showArrows}
//         animationConfig={config.gentle}
//         currentIndex={currentIndex}
//       />
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

export default function CarouselSlider(props) {
  const [offsetRadius, setOffsetRadius] = useState(3);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to manage carousel pause/resume

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
    setCards(props.cards.map((element, index) => ({ ...element, onClick: () => setGoToSlide(index) })));
  }, [props.offset, props.showArrows, props.cards]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) { // Check if carousel is paused
        setGoToSlide((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [cards, isPaused]); // Include isPaused in dependencies

  useEffect(() => {
    setCurrentIndex(goToSlide);
  }, [goToSlide]);

  // Event handlers to pause and resume carousel animation
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      style={{ width: props.width, height: props.height, margin: props.margin }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        currentIndex={currentIndex}
      />
    </div>
  );
}
