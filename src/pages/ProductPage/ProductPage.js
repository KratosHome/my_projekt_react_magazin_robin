import React, { useState } from "react";
import { useParams } from "react-router";
import productsArray, {
  getProductsObject,
} from "../../components/ProducctsList/productsArray";
import BestList from "../../container/Main/BestList/BestList";
import ButonAddProductToCard from "../../components/ButonAddProductToCard/ButonAddProductToCard";
import Quontity from "../../components/Quontity/Quonttity";
import "./ProductPage.css";

const ProductPage = ({
  productsObject = getProductsObject(productsArray),
  id,
}) => {
  let { pageId } = useParams();
  const [count, setCount] = useState(1);
  const onDecrementClick = () => {
    setCount(count - 1);
  };
  const onIncrementClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div class="col-sx-12 col-sm-12 col-md-12 col-ld-12">
        <div class="container">
          <div class="product_page_flex">
            <div class="product_page_title">
              <h1>
                <svg viewBox="0 0 1550 100">
                  <text class="h1_animation" x="40%" y="80%">
                    {productsObject[pageId].name}
                  </text>
                </svg>
              </h1>
              <h2 class="product_page_content">
                Состав: {productsObject[pageId].content}
              </h2>
            </div>
            <div>
              <img
                class="product_page_img"
                src={productsObject[pageId].img}
              ></img>
            </div>
          </div>
          <div class="product_page_ather">
            <div class="product_page_price">
              {productsObject[pageId].price} грн.
            </div>
            <div class="product_page_quontity">
              <Quontity
                count={count}
                onDecrementClick={onDecrementClick}
                onIncrementClick={onIncrementClick}
                minCount={1}
              />
            </div>
          </div>
          <div class="product_page_button">
            <ButonAddProductToCard id={id} count={count} />
          </div>
        </div>
      </div>
      <BestList />
    </>
  );
};

export default ProductPage;
