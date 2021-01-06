import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Banner = () => {
  const basket = useSelector((state) => state.basket);
  return (
    <section className="banner-section v-center">
      <div className="shoe-cont">
        <img src={require("../images/shoe.png")} alt="shoe" />
      </div>
      <div className="brand">The Best Selling Brands of shoes</div>
      <Link to="/basket">
        <span className="c-icon">{basket.length}</span>
        <i className="fa icon-basket">&#xf07a;</i>
      </Link>
    </section>
  );
};

export default Banner;
