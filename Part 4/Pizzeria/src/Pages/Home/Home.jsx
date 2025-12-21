import React from "react";
import HeroSection from "../../Component/Home/HeroSection.jsx";
import Trending from "../../Component/Home/Trending.jsx";
import Category from "../../Component/Home/Category.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Trending />
      <Category />
    </>
  );
}
