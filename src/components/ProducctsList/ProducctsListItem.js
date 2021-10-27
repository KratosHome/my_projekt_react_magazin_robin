import React, { Component } from "react";
import "./ProducctsListItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProducctsListItem extends Component {
  render() {
    const { id, category, name, img, price, content } = this.props;
    return (
      <>
        <div class="card">
          <div class="card_categori">{category}</div>
          <div class="card_like"></div>
          <Link to={`/products/${id}`}>
            <div class="card_img">
              <img src={img} alt="" />
            </div>
            <div class="card_name">{name}</div>
            <h4></h4>
            <div class="card_prise">{price}грн</div>
            <div class="card_content">{content}</div>
          </Link>
          <button class="card_buttom">в корзину</button>
        </div>
      </>
    );
  }
}

ProducctsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
ProducctsListItem.defaultProps = {
  img: "../images/now_imeg.png",
};

export default ProducctsListItem;
