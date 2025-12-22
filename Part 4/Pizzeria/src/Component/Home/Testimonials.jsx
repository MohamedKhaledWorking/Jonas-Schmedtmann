import React from "react";
import Carousel from "./Carousel.jsx";

export default function Testimonials() {
  return (
    <div className="bg-red-500 py-10 ">
      <div className="container mx-auto">
        <div style={{ position: "relative", background: "green" }}>
          <Carousel
            baseWidth={800}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </div>
  );
}
