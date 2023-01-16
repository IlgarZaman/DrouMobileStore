import React from "react";

const ShowCards = () => {
  return (
    <div>
      <div className="shopNowCards">
        <div className="homeMainDiv">
          <div className="firstCardDivParent">
            <div className="hoverDiv1">
              <div className="firstCardDivChild">
                <img
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/sub-banner-1.jpg?v=1671084695"
                  alt=""
                />
                <div className="firstDivText">
                  <p>SECURITY SMART CAMERA</p>
                  <h2>Just Starting At $850</h2>
                  <div className="firstDivBtnDiv">
                    <button>Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="secondCardDivParent">
            <div className="hoverDiv2">
              <div className="secondCardDivChild">
                <img
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/sub-banner-2.jpg?v=1671084729"
                  alt=""
                  className="showImg2"
                />
              </div>
              <div className="secondDivText">
                <p>ENTERTAINMENT & GAMES</p>
                <h2>Just Starting at $850 Hurry up!</h2>
                <div className="seconDivBtnDiv">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCards;
