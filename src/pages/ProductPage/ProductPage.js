import React from "react";
import { useParams } from "react-router";
import productsArray, {
  getProductsObject,
} from "../../components/ProducctsList/productsArray";

const ProductPage = ({ productsObject = getProductsObject(productsArray) }) => {
  return <>Bla bla</>;
};

export default ProductPage;
