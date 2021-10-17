import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div class="col-sx-0 col-sm-6 col-md-5 col-ld-6">
        <nav>
          <ul class="menu">
            <li>
              <a class="border_animation" href="">
                меню
              </a>
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
              <a class="border_animation" href="">
                про нас
              </a>
            </li>
            <li>
              <a class="border_animation" href="">
                контакты
              </a>
            </li>
            <li>
              <a class="border_animation" href="">
                доставка
              </a>
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
