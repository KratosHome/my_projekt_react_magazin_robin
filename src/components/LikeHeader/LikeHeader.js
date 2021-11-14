import React from "react";
import "./LikeHeader.css";
import { Link } from "react-router-dom";
import like from "../../components/Cart/page_img/like.png";
import { keys } from "lodash";
import { connect } from "react-redux";

const LikeHeader = ({ productsLikeState }) => {
  return (
    <>
      <div class="like">
        <Link to="/best-list">
          <img src={like} alt="Избранное" alt="like" />
          <div class="like_caunt_border">
            <div class="like_caunt">
              {keys(productsLikeState).reduce(
                (object, productId) => object + productsLikeState[productId],
                0
              )}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  productsLikeState: state.productsLikeState,
});

export default connect(mapStateToProps)(LikeHeader);
