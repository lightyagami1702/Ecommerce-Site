import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("../img/12.png"),
    caption: "",
    description: "",
  },
  {
    image: require("../img/2.png"),
    caption: "",
    description: "",
  },
  {
    image: require("../img/3.png"),
    caption: "",
    description: "",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
