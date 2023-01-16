import React, { useEffect, useState } from "react";
import axios from "axios";
import Carusel from "./carusel";
import Category from "./category";
import ShowCards from "./show-cards";
import LatestProducts from "./latest-products";
import Timer from "./timer";
import ThreeCategorySorter from "./threeCategorySorter";
import BlogAndEvents from "./blogAndEvents";
import BigDiscount from "./big-discount";
import Information from "./information";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/product/").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      {/* ------------Carusel------------------ */}
      <Carusel />
      {/* -----------Trending categories------------- */}
      <Category />
      {/* -------------shop now cards------------ */}
      <ShowCards />
      {/* -------latest product----- */}
      <LatestProducts products={products} />
      {/* timer */}
      <Timer />
      {/* ThreeCategorySorter */}
      <ThreeCategorySorter/>
      {/* -----blog and events ----- */}
      <BlogAndEvents />
      {/* -----big discount ----- */}
      <BigDiscount />
      {/* ----information----- */}
      <Information/>
    </>
  );
};

export default Home;
