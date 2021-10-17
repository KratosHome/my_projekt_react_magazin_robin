import React, { Component } from "react";
import "./ProducctsListItem.css";

class ProducctsListItem extends Component {
  render() {
    const { category, name, img, price, content } = this.props;
    return (
      <>
        <div class="card">
          <div class="card_categori">{category}</div>
          <div class="card_like"></div>
          <div class="card_img">
            <img src={img} alt="" />
          </div>
          <div class="card_name">{name}</div>
          <div class="card_prise">{price}грн</div>
          <div class="card_content">{content}</div>
          <button class="card_buttom">в корзину</button>
        </div>
      </>
    );
  }
}

export default ProducctsListItem;
