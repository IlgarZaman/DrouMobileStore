import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Input } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
const AllRproduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/product/").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const handleSearch = (e) => {
    axios.get(`http://localhost:8080/product`).then((res) => {
      let newArr = res.data.filter((product) =>
        product.name.toLowerCase(0.0).includes(e.target.value.toLowerCase())
      );
      setProducts(newArr);
    });
  };
  return (
    <div className="allProductMainDiv">
      <div className="inputFlexDiv">
        <div className="textAndInput">
          <h1>All Product</h1>
          <Input
            className="searchInput"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              handleSearch(e);
            }}
          ></Input>
        </div>
      </div>

      <div className="allProductCenterDiv">
        {products.map((e) => {
          return (
            <Link to={`/details-page/${e.id}`} key={e.id}>
              <Card
                hoverable
                style={{ width: 240, height: "400px" }}
                cover={<img alt="example" src={e.img1} />}
              >
                <div style={{textAlign:"center"}}>
                  <div>
                    <h3>{e.name}</h3>
                  </div>
                  <div>
                    <h4 style={{ color: "red" }}>Price: ${e.price}</h4>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllRproduct;
