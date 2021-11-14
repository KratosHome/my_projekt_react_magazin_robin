import React from "react";
import SimpleSlider from "./Slider/Slider.js";
import H2Product from "./H2Product/H2Product.js";
import BestList from "./BestList/BestList.js";
import SliderMain from "./SliderMain/SliderMain";
import InstaBlock from "./InstaBlock/InstaBlock.js";
import OurTeam from "./OurTeam/OurTeam.js";
import { Route, Switch } from "react-router";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import BestListPage from "../../pages/BestListPage/BestListPage";
import CartPage from "../../pages/CartPage/CartPage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import DeliveryPage from "../../pages/DeliveryPage/DeliveeryPagee";
import ProductsOll from "../../pages/ProductsPage/ProductsOll/ProductsOll";
import ProductPage from "../../pages/ProductPage/ProductPage";
import CheckoutPagee from "../../pages/CheckoutPage/CheckoutPage.js";

const Main = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path="/menu" exact>
            <ProductsOll />
            <OurTeam />
          </Route>
          <Route path="/about-us" exact>
            <AboutUsPage />
            <OurTeam />
          </Route>
          <Route path="/best-list" exact>
            <BestListPage />
            <OurTeam />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
            <OurTeam />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
            <OurTeam />
          </Route>
          <Route path="/delivery" exact>
            <DeliveryPage />
            <OurTeam />
          </Route>
          <Route path="/" exact>
            <SimpleSlider />
            <H2Product />
            <BestList />
            <SliderMain />
            <InstaBlock />
            <OurTeam />
          </Route>
          <Route path="/products/:pageId">
            <ProductPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPagee />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Main;
