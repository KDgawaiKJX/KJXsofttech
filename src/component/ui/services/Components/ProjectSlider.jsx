

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carasoul";

const ImageSlider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://i.ibb.co/w0mP8kT/project1.png"
          onClick="https://www.travoticholidays.com/"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://i.ibb.co/9YJNzqC/project5.png"
          onClick="https://timesmedia.co.in/ec/public/"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://i.ibb.co/9G3LyrC/project7.png"
          onClick="https://jobseekers.co.nz/"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://i.ibb.co/9YJNzqC/project5.png"
          onClick="https://junkbazar.com/"
        />
      ),
    }
  ];



  return (
    <div>
      <Carousel
        cards={cards}
        activeIndex={currentCardIndex}
        height="600px"
        width="100%"
        margin="0 auto"
        offset={2}
        showArrows={false} 
      />
    </div>
  );
};

export default ImageSlider;
