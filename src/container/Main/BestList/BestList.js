import React from "react";
import "./BestList.css";
import ProducctsList from "../../../components/ProducctsList/ProducctsList";
import productsArray from "../../../components/ProducctsList/productsArray";

const BestList = () => {
  const bestListtwo = productsArray.filter(
    (productsArray) => productsArray.bestListTrue != true
  );
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div class="best_list">
              <ProducctsList onClick={bestListtwo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestList;
