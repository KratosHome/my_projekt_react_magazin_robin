import React from "react";
import Slider from "react-touch-drag-slider";
import "./Slider.css";
import imagesArray from "../../../components/SliderImg/imagesArray";

const SliderHead = () => {
  return (
    <>
      <div class="conteiner">
        <div class="row">
          <div class="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div class="slide_headr">
              <Slider
                onSlideComplete={(i) => {
                  console.log("finished dragging, current slide is", i);
                }}
                onSlideStart={(i) => {
                  console.log("started dragging on slide", i);
                }}
                activeIndex={0}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={true}
              >
                {imagesArray.map(({ url, title }, id) => (
                  <img src={url} key={id} alt={title} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderHead;
