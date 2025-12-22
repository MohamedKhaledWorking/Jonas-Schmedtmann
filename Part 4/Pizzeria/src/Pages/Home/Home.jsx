import React from "react";
import HeroSection from "../../Component/Home/HeroSection.jsx";
import Trending from "../../Component/Home/Trending.jsx";
import Category from "../../Component/Home/Category.jsx";
import NewCollection from "../../Component/Home/NewCollection.jsx";
import Masterpiece from "../../Component/Home/Masterpiece.jsx";
import TopRated from "../../Component/Home/TopRated.jsx";
import SpecialOffer from "../../Component/Home/SpecialOffer.jsx";
import Featured from "../../Component/Home/Featured.jsx";
import Carousel from "../../Component/Home/Carousel.jsx";
import Testimonials from "../../Component/Home/Testimonials.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Trending />
      <Category />
      <NewCollection />
      <Masterpiece />
      <TopRated />
      <SpecialOffer />
      <Featured />
    </>
  );
}
