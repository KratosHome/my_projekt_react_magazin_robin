import React from "react";
import { connect } from "react-redux";
import Quontity from "../Quontity/Quonttity";
import "./CartProductListExtended.css";
import productsArray, {
  getProductsObject,
} from "../../components/ProducctsList/productsArray";
import Delete_img from "../../components/Cart/page_img/delete.png";

const CartProductListExtended = ({
  product,
  productCount,
  removeProductFromCart,
  changeProductQuantity,
  productsObject = getProductsObject(productsArray),
}) => {
  {
    console.log(product);
  }
  return (
    <>
      <span class="cart_line" />
      <div class="card_Product">
        <img class="cart_img" src={product.img}></img>
        <div>{product.name}</div>
        <div>{product.price} грн.</div>
        <Quontity
          count={productCount}
          onDecrementClick={() =>
            productCount === 1
              ? removeProductFromCart(product.id)
              : changeProductQuantity(product.id, productCount - 1)
          }
          onIncrementClick={() =>
            changeProductQuantity(product.id, productCount + 1)
          }
          minCount={0}
        />
        <div>{product.price * productCount} грн. </div>
        <button
          class="delete_buton"
          onClick={() => removeProductFromCart(product.id)}
        >
          <img class="delete_icon" src={Delete_img} alt="Robin Bobbin" />
        </button>
      </div>
      <span class="cart_line" />
    </>
  );
};

const mapStateToProps = (state) => ({
  productsInCard: state.productsInCard,
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (id) =>
    dispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      id,
    }),
  changeProductQuantity: (id, count) =>
    dispatch({
      type: "CHENGE_PRODUCT_QUANTITTY",
      id,
      count,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductListExtended);
