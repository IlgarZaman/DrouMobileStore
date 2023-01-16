import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import "./index.scss";
const Favorite = () => {
  let favoriteData = JSON.parse(localStorage.getItem("favorite"));
  const navigate = useNavigate();
  const navigatehome = () => {
    navigate("/");
  };
  const rerender = () => {
    navigate("/favorite-product");
  };

  console.log(favoriteData);
  return (
    <div className="favoriteMainDiv">
      <div className="favoriteCenterDiv">
        {favoriteData.map((e) => {
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
              <Button
              className="favoriteGoHomeRemove"
              type="primary" danger
                onClick={() => {
                  console.log(e);
                  let removedArray = JSON.parse(
                    localStorage.getItem("favorite")
                  )?.filter((elem) => elem.id !== e.id);
                  localStorage.setItem(
                    "favorite",
                    JSON.stringify(removedArray)
                  );
                  rerender();
                }}
              >
                Remove Favorites
              </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
