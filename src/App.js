import React from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "./assets/images/1.jpg";
import image2 from "./assets/images/1.jpg";
import image3 from "./assets/images/1.jpg";

function App() {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src={image1} alt="legend 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={image2} alt="legend 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={image3} alt="legend 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default App;
