import React from "react";
import CardProductList from "../../components/Cart/CartProductList";
import { connect } from "react-redux";
import CartProductListExtended from "../../components/Cart/CartProductListExtended";
import "./CartPage.css";
import { keys } from "lodash";
import producttsArray, {
  getProductsObject,
} from "../../components/ProducctsList/productsArray";
import { Link } from "react-router-dom";

const CartPage = ({
  productsInCard,
  productsObject = getProductsObject(producttsArray),
}) => {
  return (
    <>
      <h1>корзина</h1>
      <div class="cart_flex">
        <div class="col-sx-12 col-sm-12 col-md-8 col-ld-8">
          <div class="container">
            <div class="cart_title">
              <span>Товары</span>
              <span>Цена</span>
              <span>Количисство</span>
              <span>Сумма</span>
            </div>
            <CardProductList
              productsInCard={productsInCard}
              CartItem={CartProductListExtended}
            />
          </div>
        </div>
        <div class="col-sx-12 col-sm-12 col-md-3 col-ld-3">
          <div class="container">
            <div class="cart_flex">
              <div class="card_checkout">
                <div class="cart_summ">
                  <h2 class="card_checkout_h2">СУММА</h2>
                  <div class="card_checkout_summ">
                    {keys(productsInCard).reduce(
                      (objekt, productId) =>
                        objekt +
                        productsObject[productId].price *
                          productsInCard[productId],
                      0
                    )}
                  </div>
                </div>
                <span class="cart_line" />
                <div class="card_buyer_info">
                  <input placeholder="Ф.И.О" />
                  <input placeholder="Номер телефона" />
                  <input placeholder="Город" />
                  <input placeholder="Служба доставки" />
                  <input placeholder="Адрес доставки" />
                </div>
                <Link class="cart_buttom_link" to="checkout">
                  <button class="cart_buttom_checkout">заказть</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  productsInCard: state.productsInCard,
});

export default connect(mapStateToProps)(CartPage);
