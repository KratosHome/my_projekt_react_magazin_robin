import React from "react";
import { Link } from "react-router-dom";
import basket from "../../components/Cart/page_img/basket.png";
import "./CartHeader.css";
import { connect } from "react-redux";
import { keys } from "lodash";

const CardHeader = ({ productsInCard }) => {
  return (
    <>
      <div class="basket">
        <Link to="/cart">
          <img src={basket} alt="Корзина" />
          <div class="bascet_caunt_border">
            <div class="bascet_caunt">
              {keys(productsInCard).reduce(
                (objekt, productId) => objekt + productsInCard[productId],
                0
              )}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  productsInCard: state.productsInCard,
});

export default connect(mapStateToProps)(CardHeader);
