import React from "react";
import { useParams } from "react-router";
import productsArray, {
  getProductsObject,
} from "../../components/ProducctsList/productsArray";

const ProductPage = ({ productsObject = getProductsObject(productsArray) }) => {
  let { id } = useParams();
  console.log(id);
  return <>{productsObject[id].name}</>;
};
export default ProductPage;
