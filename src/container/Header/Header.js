import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Menu from "./Menu/Menu.js";
import logo from "../../components/Cart/page_img/logo.png";
import like from "../../components/Cart/page_img/like.png";
import basket from "../../components/Cart/page_img/basket.png";
import phoneIcon from "../../components/Cart/page_img/phone_icon.png";

const Header = () => {
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-sx-10 col-sm-2 col-md-5 col-ld-3">
              <div class="logo">
                <Link to="/">
                  <img src={logo} alt="Robin Bobbin" />
                </Link>
              </div>
            </div>
            <Menu />
            <div class="col-sx-12 col-sm-4 col-md-2 col-ld-3">
              <div class="contact">
                <div class="contact_block">
                  <div class="opening_hours">с 8:00 до 20:00</div>
                  <div class="telphone">
                    <a href="tel:+380689171761">
                      +380 68<span class="telphone_number"> 917 17 61</span>
                    </a>
                  </div>
                  <div class="like_basket">
                    <div class="like">
                      <Link to="/best-list">
                        <img src={like} alt="Избранное" />
                      </Link>
                    </div>
                    <div class="basket">
                      <Link to="/cart">
                        <img src={basket} alt="Корзина" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="img_phone">
                  <img src={phoneIcon} alt="Звони к нам)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
