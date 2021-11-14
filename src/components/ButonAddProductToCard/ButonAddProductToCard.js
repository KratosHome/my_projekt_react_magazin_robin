import React from "react";
import { connect } from "react-redux";
import "./ButonAddProductToCard.css";

const ButonAddProductToCard = ({ id, count, addProductToCard }) => {
  return (
    <>
      <button class="card_buttom" onClick={() => addProductToCard(id, count)}>
        в корзину
      </button>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addProductToCard: (id, count) =>
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      id: id,
      count: count,
    }),
});
export default connect(null, mapDispatchToProps)(ButonAddProductToCard);
