import React from "react";
import ProducctsList from "../../../components/ProducctsList/ProducctsList";

const ProductsOll = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <h1>Меню</h1>
            <div class="best_list">
              <ProducctsList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsOll;
