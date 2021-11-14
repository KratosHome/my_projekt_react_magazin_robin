import React, { useState } from "react";
import { keys } from "lodash";
import CartProductListItem from "./CartProductListItem";
import productsArray, {
  getProductsObject,
} from "../ProducctsList/productsArray";

const CardProductList = ({
  productsInCard,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductListItem,
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
