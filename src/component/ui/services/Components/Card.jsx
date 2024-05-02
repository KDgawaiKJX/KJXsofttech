import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


function Card({ imagen, onClick }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  function imageClick(url) {
    window.location = url;
  }

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter += 1
    setCounter(counter)
    console.log("value added", Math.random(), counter)
  }

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >

      <a href={onClick} target="_blank" rel="noopener noreferrer">
        <img src={imagen} alt="" />
      </a>


    </animated.div >
  );
}

export default Card;


