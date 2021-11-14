import React, { useState } from "react";
import "./LikeHeadeListExtended.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Quontity from "../Quontity/Quonttity";
import ButonAddProductToCard from "../ButonAddProductToCard/ButonAddProductToCard";

const LikeHeadeListExtended = ({ product, isLiked, addLike, removeLike }) => {
  const [count, setCount] = useState(1);
  const onDecrementClick = () => {
    setCount(count - 1);
  };
  const onIncrementClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div class="card">
        <div class="card_categori">{product.category}</div>
        <Link to={`/products/${product.pageId}`}>
          <div class="card_img">
            <img src={product.img} alt="" />
          </div>
          <div class="card_name">{product.name}</div>
          <div class="card_prise">{product.price}грн</div>
        </Link>
        <div class="card_content">
          {product.content}
          <Quontity
            count={count}
            onDecrementClick={onDecrementClick}
            onIncrementClick={onIncrementClick}
            minCount={1}
          />
        </div>
        <ButonAddProductToCard id={product.id} count={count} />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  productsLikeState: state.productsLikeState,
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id) =>
    dispatch({
      type: "LIKE",
      id,
    }),
  removeLike: (id) =>
    dispatch({
      type: "DISELIKE",
      id,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeHeadeListExtended);
