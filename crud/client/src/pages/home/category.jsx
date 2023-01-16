import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const [category, setGategory] = useState([]);

  const getData = async () => {
    const response = await axios.get(`http://localhost:8080/category/`);
    setGategory(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="trendingCategoriesCenter">
        <div className="homeMainDiv">
          <h2 className="trendingCategoriesh2">Trending Categories</h2>
          <div className="trendingCategorieshAllDiv">
            <div className="trandingCategoryDiv">
              {category.map((e) => {
                return (
                  <Link key={e.id}>
                    <div>
                      <div className="cardDivParent">
                        <div
                          className="cardDivChild"
                          alt=""
                          style={{
                            backgroundImage: "url(" + `${e.categoryImg}` + ")",
                          }}
                        ></div>
                        <div>
                          <h3>{e.categoryName}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
