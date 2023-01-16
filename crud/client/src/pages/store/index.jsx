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
    navigate("/store-npm i react-iconspage");
  };

  console.log(cardData);
  return (
    <div className="favoriteMainDiv">
      <div className="favoriteCenterDiv">
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
                  <p className="favoritePTag">Price: {e.price}</p>
                  <p className="favoriteDescription">
                    Description: {e.description}
                  </p>
                </div>
                <Button onClick={navigatehome} className="favoriteGoHomeBtn">
                  Go Home
                </Button>
              </div>
              <Button
                onClick={() => {
                  console.log(e);
                  let removedArray = JSON.parse(
                    localStorage.getItem("card")
                  )?.filter((elem) => elem.id !== e.id);
                  localStorage.setItem(
                    "favorite",
                    JSON.stringify(removedArray)
                  );
                  rerender();
                }}
                className="favoriteGoHomeBtn"
              >
                Remove Favorites
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
