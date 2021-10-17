import React from "react";
import Slider from "./Slider/Slider.js";
import H2Product from "./H2Product/H2Product.js";
import BestList from "./BestList/BestList.js";
import SliderMain from "./SliderMain/SliderMain";
import InstaBlock from "./InstaBlock/InstaBlock.js";
import OurTeam from "./OurTeam/OurTeam.js";

const Main = () => {
  return (
    <>
      <main>
        <Slider />
        <H2Product />
        <BestList />
        <SliderMain />
        <InstaBlock />
        <OurTeam />
      </main>
    </>
  );
};

export default Main;
