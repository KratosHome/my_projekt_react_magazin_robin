import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div class="col-sx-0 col-sm-7 col-md-5 col-ld-6">
        <nav>
          <ul class="menu">
            <li>
              <Link class="border_animation" to="/menu">
                меню
              </Link>
              <ul class="cabmenu">
                <li>
                  <Link to="/coffee">кофе</Link>
                  <ul class="second">
                    <li>
                      <Link to="/coffee_arabica">арабика</Link>
                    </li>
                    <li>
                      <Link to="/coffee_blend">купаж</Link>
                    </li>
                    <li>
                      <Link to="/coffee_cafein_free">без-кофеина</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/waffles">вафли</Link>
                  <ul class="second">
                    <li>
                      <Link to="/waffles_sweet">сладкие</Link>
                    </li>
                    <li>
                      <Link to="/waffles_salty">соленые</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/pancakes">блинчики</Link>
                  <ul class="second">
                    <li>
                      <Link to="/pancakes_sweet">сладкие</Link>
                    </li>
                    <li>
                      <Link to="/pancakes_salty">соленые</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/goodies">вкусняшки</Link>
                </li>
                <li>
                  <Link to="/beverages">напитки</Link>
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
