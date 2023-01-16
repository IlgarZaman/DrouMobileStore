import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
const ThreeCategorySorter = () => {
  const [category, setCategory] = useState([]);
  const [isActiveOne, setActiveOne] = useState(false);
  const [isActiveTwo, setActiveTwo] = useState(false);
  const [isActiveThree, setActiveThree] = useState(false);
  const getData = async () => {
    const response = await axios.get(`http://localhost:8080/accessories/`);
    setCategory(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const sortiphone = () => {
    const iphoneData = async () => {
      const response = await axios.get(`http://localhost:8080/iphone/`);
      setCategory(response.data);
    };
    iphoneData();
    console.log(category);
    setActiveOne(isActiveOne);
  };
  let sortlaptop = () => {
    const laptopData = async () => {
      const response = await axios.get(`http://localhost:8080/laptop/`);
      setCategory(response.data);
    };
    laptopData();
    console.log(category);
    setActiveTwo(!isActiveTwo);
  };

  const sortaccessories = () => {
    const accessoriesData = async () => {
      const response = await axios.get(`http://localhost:8080/accessories/`);
      setCategory(response.data);
    };
    accessoriesData();
    console.log(category);
    setActiveThree(!isActiveThree);
  };

  return (
    <div className="ThreeCategorySorterMAinDiv">
      <div className="ThreeCategorySorterCenterDiv">
        <div className="hreeCategorySorterTitleAndButton">
          <div className="hreeCategorySorterTitleText">
            <h2>Popular Products</h2>
          </div>
          <div className="hreeCategorySorterTitleButtons">
            <button
              className={isActiveOne ? "buttonColorRed" : "buttonColorBlack"}
              onClick={() => {
                sortaccessories();
                setActiveThree(true);
                setActiveTwo(true);
                setActiveOne(false);
              }}
            >
              Accessories
            </button>
            <button
              className={isActiveTwo ? "buttonColorRed" : "buttonColorBlack "}
              onClick={() => {
                sortiphone();
                setActiveThree(true);
                setActiveTwo(false);
                setActiveOne(true);
              }}
            >
              iPhone
            </button>

            <button
              className={isActiveThree ? "buttonColorRed" : "buttonColorBlack"}
              onClick={() => {
                sortlaptop();
                setActiveTwo(true);
                setActiveOne(true);
                setActiveThree(false);
              }}
            >
              Laptop
            </button>
          </div>
        </div>
        <div className="cardsMainDiv">
          {category.map((e) => {
            // console.log(e.img1);
            return (
              <div className="cards" key={e.id}>
                <div className="secondivforcards">
                  <Card
                    hoverable
                    style={{
                      height: 300,
                    }}
                    cover={<img alt="example" src={e.img1} />}
                  >
                    <div className="threeCategoryTextDiv">
                      <h3>{e.name}</h3>
                      <h4>Price: ${e.price}</h4>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThreeCategorySorter;
