import React from "react";
import { keys } from "lodash";
import productsArray, {
  getProductsObject,
} from "../ProducctsList/productsArray";

const CardProductList = ({
  productsInCard,
  productsObject = getProductsObject(productsArray),
  CartItem,
  changeProductQuantity,
}) => {
  return (
    <>
      {keys(productsInCard).map((productId) => (
        <CartItem
          key={productId}
          product={productsObject[productId]}
          productCount={productsInCard[productId]}
          changeProductQuantity={changeProductQuantity}
        />
      ))}
    </>
  );
};
export default CardProductList;
