import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div class="col-sx-0 col-sm-6 col-md-5 col-ld-6">
        <nav>
          <ul class="menu">
            <li>
              <Link class="border_animation" to="/menu">
                меню
              </Link>
              <ul class="cabmenu">
                <li>
                  <a href="">кофе</a>
                  <ul class="second">
                    <li>
                      <a href="">арабика</a>
                    </li>
                    <li>
                      <a href="">купаж</a>
                    </li>
                    <li>
                      <a href="">без-кофеина</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">вафли</a>
                  <ul class="second">
                    <li>
                      <a href="">сладкие</a>
                    </li>
                    <li>
                      <a href="">соленые</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">блинчики</a>
                  <ul class="second">
                    <li>
                      <a href="">сладкие</a>
                    </li>
                    <li>
                      <a href="">соленые</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">вкусняшки</a>
                </li>
                <li>
                  <a href="">напитки</a>
                </li>
              </ul>
            </li>
            <li>
              <Link class="border_animation" to="/about-us">
                про нас
              </Link>
            </li>
            <li>
              <Link class="border_animation" to="/contact">
                контакты
              </Link>
            </li>
            <li>
              <Link class="border_animation" to="/delivery">
                доставка
              </Link>
            </li>
          </ul>
        </nav>
        <div class="nav-mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Menu;
