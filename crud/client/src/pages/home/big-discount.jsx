import React from "react";

const BigDiscount = () => {
  return (
    <div className="bigDiscountMain">
      <div className="parentDicountDiv">
        <div className="childDicountDiv">
          <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/slide61.jpg?v=1671216267" />
        </div>
        <div className="bigDiscoundText">
          <span>Big Discount</span>
          <h2>Google Pixel Smart Phone</h2>
          <h3>$350.00</h3>
          <div className="bigDiscoundDiv">
            <button className="bigDiscoundBtn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigDiscount;
