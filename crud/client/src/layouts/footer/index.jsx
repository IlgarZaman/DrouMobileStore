import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <div className="footerMainDiv">
        <div className="footerCenterDiv">
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>Drou Demo Store</li>
              <li>No. 1259 Freedom, New York</li>
              <li>United States</li>
              <li>+91-987654321</li>
              <li>demo@exampledemo.com</li>
            </ul>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>Product Support</li>
              <li>Checkout</li>
              <li>License Policy</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div>
            <h3>Customer Service</h3>
            <ul>
              <li>Help Center</li>
              <li>Redeem Voucher</li>
              <li>Contact Us</li>
              <li>Policies & Rules</li>
            </ul>
          </div>
          <div>
            <h3>Download Our App</h3>
            <ul>
              <li>
                <p>
                  Download our App and get extra 15% Discount on your <br />{" "}
                  first Order..!
                </p>
              </li>

              <li>
                <div className="storeImg">
                  <img
                    src=" https://cdn.shopify.com/s/files/1/0495/8021/2387/files/app-store.jpg?v=1603274799"
                    alt="app-store"
                  />
                  <img
                    src=" https://cdn.shopify.com/s/files/1/0495/8021/2387/files/google-play.jpg?v=1603274809  "
                    alt="play-market"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <div className="footerMainDiv">
          <div>Copyright © Team90Degree | Built with Drou by Team90Degree.</div>
          <div>
            <img
              src=" https://cdn.shopify.com/s/files/1/0495/8021/2387/files/payment-method.png?v=1603274813  "
              alt="paymentmethod"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
