import React from "react";
import LikeHeadeListExtended from "../../components/LikeHeader/LikeHeadeListExtended";
import "./BestListPage.css";
import { connect } from "react-redux";
import LikeProductList from "../../components/LikeHeader/LikeProductList";

const BestListPage = ({ productsLikeState }) => {
  return (
    <>
      <h1>Любимчики</h1>
      <div class="container">
        <div class="row">
          <div class="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div class="best_list">
              <LikeProductList
                productsLikeState={productsLikeState}
                LiketItem={LikeHeadeListExtended}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  productsLikeState: state.productsLikeState,
});

export default connect(mapStateToProps)(BestListPage);
