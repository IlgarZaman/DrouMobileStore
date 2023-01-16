import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Card } from "antd";
import axios from "axios";
import "./index.scss";

const DetailPage = ({ card, setCard }) => {
  let [product, setproduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUsers = async () => {
    const selectProduct = await axios.get(
      `http://localhost:8080/product/${id}`
    );
    setproduct(selectProduct.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const navigatehome = () => {
    navigate("/");
  };
  
  //-------------------add card---------------------
  const handleAddToCard = (obj) => {
    let cardArr = JSON.parse(localStorage.getItem("card") == null)
      ? []
      : JSON.parse(localStorage.getItem("card"));
    localStorage.setItem("card", JSON.stringify(cardArr));
    let cardObj = {
      id: "",
      name: "",
      img1: "",
      price: "",
      description: "",
    };
    cardObj.id = obj.id;
    cardObj.name = obj.name;
    cardObj.img1 = obj.img1;
    cardObj.price = obj.price;
    cardObj.description = obj.description;
    cardArr = JSON.parse(localStorage.getItem("card"));
    cardArr.push(cardObj);
    localStorage.setItem("card", JSON.stringify(cardArr));
    console.log(cardArr);
  };

  //-------------------add favorite---------------------

  const handleAddToFavorite = (obj) => {
    let favoriteArr = JSON.parse(localStorage.getItem("favorite") == null)
      ? []
      : JSON.parse(localStorage.getItem("favorite"));
    localStorage.setItem("favorite", JSON.stringify(favoriteArr));
    let favoriteCound = 0;
    let facoriteObj = {
      id: "",
      name: "",
      img1: "",
      price: "",
      description: "",
    };
    facoriteObj.id = obj.id;
    facoriteObj.name = obj.name;
    facoriteObj.img1 = obj.img1;
    facoriteObj.price = obj.price;
    facoriteObj.description = obj.description;
    favoriteArr = JSON.parse(localStorage.getItem("favorite"));

    favoriteArr.map((element) => {
      if (element.id == obj.id) {
        favoriteCound++;
      }
    });
    if (favoriteCound != 0) {
      alert("The product has already been added to favorites...");
      favoriteCound = 0;
    } else {
      favoriteArr.push(facoriteObj);
      localStorage.setItem("favorite", JSON.stringify(favoriteArr));
    }
    console.log(favoriteArr);
  };

  return (
    <div className="detailsMainDiv">
      <div className="detailGoHomeDiv">
        <div className="detailGoHomeDivCenter">
          <pre style={{ cursor: "pointer" }} onClick={navigatehome}>
            Home /
          </pre>
          <p className="redPTag">{product[0]?.name}</p>
        </div>
      </div>
      <div className="detailsCenterDiv">
        <div className="detailPageMainDiv">
          <div className="detailPageImgs">
            <div className="detailMainImg">
              <img src={product[0]?.img1} alt="" id="mainImg" />
            </div>
            <div className="detailPageOtherImg">
              <div className="opacity">
                <img src={product[0]?.img1} />
              </div>
              <div>
                <img src={product[0]?.img2} />
              </div>
              <div>
                <img src={product[0]?.img3} />
              </div>
            </div>
          </div>
          <div className="detailPageWrite">
            <h2>{product[0]?.name}</h2>
            <div className="detailPriceDiv">
              <h2>${product[0]?.price}</h2>
            </div>
            <div className="detailPageColorDiv">
              <div>
                <p>Color: </p>
              </div>
              <div className="colorYellow"></div>
              <div className="colorGray"></div>
              <div className="colorPink"></div>
              <div className="colorBrown"></div>
              <div className="colorBlue"></div>
            </div>
            <div className="addToCart">
              <Button
                onClick={() => handleAddToCard(product[0])}
                className="addToCartBtn"
              >
                Add To Cart
              </Button>
              <div
                className="addToFavorite"
                onClick={() => handleAddToFavorite(product[0])}
              >
                <i className="fa-regular fa-heart fa"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
