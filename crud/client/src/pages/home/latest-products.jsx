import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/styles.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
const LatestProducts = ({ products }) => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          className="latestMainDiv"
          style={{
            maxWidth: "1300px",
            margin: "50px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 className="latestHone">Latest Products</h1>
          <Link className="latestLink" to={"/all-product"}>
            View all products
            <i className="fa-solid fa-arrow-right" style={{ color: "red" }}></i>
          </Link>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="latestProductMainDiv">
          <div className="latestProductCenterDiv">
            {products.map((e) => {
              return (
                <SwiperSlide
                  className="swiperSlider"
                  style={{ display: "block" }}
                  key={e.id}
                >
                  <Link to={`/details-page/${e.id}`}>
                    <div className="swiperImgDiv">
                      <img
                        src={e.img1}
                        alt=""
                        className="swiperImgOne"
                        style={{ width: "150px", height: "130px" }}
                      />
                      <img
                        src={e.img2}
                        alt=""
                        className="swiperImgTwo"
                        style={{ width: "150px", height: "130px" }}
                      />
                    </div>
                    <div>
                      <h4>{e.name}</h4>
                    </div>
                    <div>
                      <h3>${e.price}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default LatestProducts;
