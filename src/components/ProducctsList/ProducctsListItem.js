import React, { useState } from "react";
import "./ProducctsListItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Quontity from "../Quontity/Quonttity";
import { connect } from "react-redux";
import ButonAddProductToCard from "../ButonAddProductToCard/ButonAddProductToCard";

const ProducctsListItem = ({
  id,
  category,
  name,
  img,
  price,
  content,
  pageId,
  isLiked,
  addLike,
  removeLike,
}) => {
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
        <div class="card_categori">{category}</div>
        <button
          class="card_like_button"
          onClick={() => (isLiked ? removeLike(id) : addLike(id))}
        >
          {isLiked ? (
            <div class="card_like_border"></div>
          ) : (
            <div class="card_like"></div>
          )}
        </button>
        <Link to={`/products/${pageId}`}>
          <div class="card_img">
            <img src={img} alt={name} />
          </div>
          <div class="card_name">{name}</div>
          <div class="card_prise">{price}грн</div>
        </Link>
        <div class="card_content">
          {content}
          <Quontity
            count={count}
            onDecrementClick={onDecrementClick}
            onIncrementClick={onIncrementClick}
            minCount={1}
          />
        </div>
        <ButonAddProductToCard id={id} count={count} />
      </div>
    </>
  );
};

ProducctsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
ProducctsListItem.defaultProps = {
  img: "../images/now_imeg.png",
};

const mapStateToProps = (state, { id }) => ({
  isLiked: state.productsLikeState[id],
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

export default connect(mapStateToProps, mapDispatchToProps)(ProducctsListItem);
