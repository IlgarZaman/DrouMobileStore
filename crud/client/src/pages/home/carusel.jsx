import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const Carusel = () => {
  const contentStyle = {
    height: "160px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <div>
      <div className="bck-div">
        <div className="homeMainDiv">
          <Carousel autoplay speed={4000}>
            <div style={contentStyle} className="firstCarusel">
              <div className="firstCaruselContent">
                <h4>SALE UP TO 30% OFF</h4>
                <h1>Apple Watch Series </h1>
                <p>
                  Feature packed at a better value than ever Powerful sensors to
                  monitor your fitness
                </p>
                <div>
                    <Link to={"/all-product"}>
                  <button className="caruselBtn">
                    Shop Now <i className="fa-solid fa-arrow-right"></i>
                  </button>
                    </Link>
                </div>
              </div>
            </div>
            {/* --------------------------------- */}
            <div style={contentStyle} className="secondCarusel">
              <div className="secondCaruselContent">
                <h4>New arrivals collection</h4>
                <h1>iPhone Accessories </h1>
                <p>
                  Snap on a case, wallet, wireless charger battery pack all
                  accessories you’re looking
                </p>
                <div>
                  <Link to={"/all-product"}>
                    <button className="caruselBtn">
                      Shop Now <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
