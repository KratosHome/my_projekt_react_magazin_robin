import React from "react";
import { keys } from "lodash";
import productsArray, {
  getProductsObject,
} from "../ProducctsList/productsArray";

const LikeProductList = ({
  productsLikeState,
  productsObject = getProductsObject(productsArray),
  LiketItem,
  changeProductQuantity,
}) => {
  return (
    <>
      {keys(productsLikeState).map((productId) => (
        <LiketItem
          key={productId}
          product={productsObject[productId]}
          productCount={productsLikeState[productId]}
          changeProductQuantity={changeProductQuantity}
        />
      ))}
    </>
  );
};
export default LikeProductList;
