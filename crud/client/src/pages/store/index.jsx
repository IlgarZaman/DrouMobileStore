import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import "./index.scss";
const Store = () => {
  let cardData = JSON.parse(localStorage.getItem("card"));
  const navigate = useNavigate();
  const navigatehome = () => {
    navigate("/");
  };
  const rerender = () => {
    navigate("/store-page");
  };

  console.log(cardData);
  return (
    <div className="storeMainDiv">
      <div className="storeCenterDiv">
        {cardData.map((e) => {
          return (
            <Card
              key={e.id}
              hoverable
              style={{
                width: "100%",
                height: 300,
                backgroundColor: "#f8f8f8",
                display: "flex",
              }}
              cover={
                <img
                  alt="example"
                  src={e.img1}
                  style={{ height: 300, width: 300 }}
                />
              }
            >
              <div style={{ display: "flex" }}>
                <div className="textDiv">
                  <h3>{e.name}</h3>
                  <p className="storePTag">Price: {e.price}</p>
                  <p className="storeDescription">
                    Description: {e.description}
                  </p>
                </div>
                <Button onClick={navigatehome} className="storeGoHomeBtn">
                  Go Home
                </Button>
              </div>
              <Button
              type="primary" danger
                onClick={() => {
                  console.log(e);
                  let removedArray = JSON.parse(
                    localStorage.getItem("card")
                  )?.filter((elem) => elem.id !== e.id);
                  localStorage.setItem("card", JSON.stringify(removedArray));
                  rerender();
                }}
                className="storeRemoveBtn"
              >
                Remove Basket
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
