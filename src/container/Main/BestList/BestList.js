import React from "react";
import "./BestList.css";
import { ProducctsListBestList } from "../../../components/ProducctsList/ProducctsList";

const BestList = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div class="best_list">
              <ProducctsListBestList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestList;
