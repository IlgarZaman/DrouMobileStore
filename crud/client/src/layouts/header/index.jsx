import React, { useEffect, useState } from "react";
import "./index.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import { Link, NavLink } from "react-router-dom";

const items_2 = [
  {
    key: "1",
    type: "group",
    label: "Smart Phone",
    children: [
      {
        key: "1-1",
        label: "Direct TV",
      },
      {
        key: "1-2",
        label: "LCD Screen",
      },
      {
        key: "1-3",
        label: "LED Screen",
      },
      {
        key: "1-4",
        label: "Headsets",
      },
      {
        key: "1-5",
        label: "Smart Watch",
      },
      {
        key: "1-6",
        label: "Airpods pro",
      },
      {
        key: "1-7",
        label: "Computer",
      },
    ],
  },
  {
    key: "2",
    type: "group",
    label: "Headphones",
    children: [
      {
        key: "2-1",
        label: "Android",
      },
      {
        key: "2-2",
        label: "Airpods",
      },
      {
        key: "2-3",
        label: "iPhone",
      },
      {
        key: "2-4",
        label: "Windows phones",
      },
      {
        key: "2-5",
        label: "Apple phone",
      },
      {
        key: "2-6",
        label: "Logitech",
      },
      {
        key: "2-7",
        label: "Nokia phone",
      },
    ],
  },
  {
    key: "3",
    type: "group",
    label: "Apple MacBook",
    children: [
      {
        key: "3-1",
        label: "Laptop",
      },
      {
        key: "3-1",
        label: "Convertible",
      },
      {
        key: "3-2",
        label: "Wired Earbuds",
      },
      {
        key: "3-3",
        label: "MacBook Pro",
      },
      {
        key: "3-4",
        label: "EarBuds",
      },
      {
        key: "3-5",
        label: "Speaker",
      },
      {
        key: "3-6",
        label: "Home Security ",
      },
    ],
  },
];
const items_3 = [
  {
    key: "1",
    label: "About Page",
  },
  {
    key: "2",
    label: "Contact Page",
  },
  {
    key: "3",
    label: "FAG Page",
  },
  {
    key: "4",
    label: "Privacy Policy",
    children: [
      {
        key: "4-1",
        label: "Refund Policy",
      },
      {
        key: "4-2",
        label: "Terms of Service",
      },
      {
        key: "4-3",
        label: "Contact Information",
      },
      {
        key: "4-4",
        label: "Terms of Service",
      },
    ],
  },
  {
    key: "5",
    label: "404 Error Page",
  },
];
const items_money = [
  {
    key: "USD",
    label: "USD - US Dollar",
  },
  {
    key: "EUR",
    label: "EUR - Euro",
  },
  {
    key: "GBP",
    label: "GBP - British Pound",
  },
  {
    key: "INR",
    label: "INR - Indian Rupee",
  },
  {
    key: "BDT",
    label: "BDT - Bangladesh Taka",
  },
];
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [none, setNone] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNone(window.scrollY > 50);
    });
  }, []);
  return (
    <div className="mainDiv">
      <div className={scroll ? "noneTopHeader" : "centerDiv"}>
        <div className="topHeader">
          <div className="leftText">
            <ul>
              <li>(08)123 456 7890</li>
              <li>
                <a target="_blank" href="https://www.google.com/maps">
                  Store location
                </a>
              </li>
            </ul>
          </div>

          <div className="centerText">
            <p>Tell a friend about Drou &amp; get 20% off*</p>
          </div>
          <div className="rightText">
            <Dropdown
              menu={{
                items: items_money,
                selectable: true,
                defaultSelectedKeys: ["2"],
              }}
            >
              <Typography.Link>
                <Space>
                  Valute
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
            <NavLink className="logInSignUp">Log In/Sign Up</NavLink>
          </div>
        </div>
      </div>
      {/* -------------------------------------- */}
      <div className={scroll ? "noneTopHeader" : "underline"}></div>
      {/* -------------------------------------- */}
      <div className={scroll ? "headerBottomDivScroll" : "headerBottomDiv"}>
        <div className="centerDiv">
          <div className="bottomDiv">
            <div className="logo">
              <NavLink to="/" className="theme-logo">
                <img
                  src="//cdn.shopify.com/s/files/1/1152/4590/files/logo_300x300.png?v=1671082437"
                  alt="Drou"
                />
              </NavLink>
            </div>
            <div className="menuDiv">
              <div>
                <Link to={"/"}>
                  <h2 className="space">HOME</h2>
                </Link>
              </div>
              <div>
                <Dropdown
                  placement="bottom"
                  overlayClassName="electonics"
                  menu={{
                    items: items_2,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <h2>ELECTRONİCS</h2>
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>

              <div>
                <Link>
                  <h2 className="space">BLOG</h2>
                </Link>
              </div>
              <div>
                <Dropdown
                  menu={{
                    items: items_3,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <h2>PAGES</h2>
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
              <div>
                <Link>
                  <h2 className="space">CONTACT</h2>
                </Link>
              </div>
            </div>
            <div className="icons">
              <Link to={"/all-product"}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link to={"/favorite-product"}>
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to={"/store-page"}>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
          {/* <Content /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
