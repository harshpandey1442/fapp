import React, { useState } from "react";
import myimg from "../../img/cart.png";
import CartItems from "../Cart/CartItems";
import MyCartModal from "../MyCartModal/MyCartModal";
import "./StaticHeader.css";

const WRAPPER_STYLE = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  padding: "10px",
};

function StaticHeader(props) {
  
  const {product} = props;

  const [isOpen, setIsOpen] = useState(false);

//   
  return (
    // style={OTHER_CONTENT_STYLES}
    <div className="blink-cover" style={OTHER_CONTENT_STYLES}>
      <div className="blink2">
        <span>
         
          <p className="img">FOOD APP</p>
        </span>

        </div>

      <div>
        <a href="#/cart">
          {/* style={WRAPPER_STYLE} */}
          <div className="outer-cart" style={WRAPPER_STYLE}>
            <div className="inner-cart">
              <div className="cart-img">
                <img src={myimg} className="img-cart" alt="cart-img" />
              </div>
              <div className="cart-text">
                <h4
                  onClick={() => {
                    setIsOpen(true);
                    console.log("Your Cart clicked!!");
                  }}
                >
                  Your Cart{" "}
                </h4>
              </div>

              {props.countCartItems ? (
                <div className="cart-counter">
                  <button className="cart-button">
                    {props.countCartItems}
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          
        </a>{" "}
      </div>

      <MyCartModal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="list">Order Receipt</div>
        <br/><br/>
        <CartItems
            cartItems={props.cartItems}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            products={product}
        ></CartItems>
      </MyCartModal>
    </div>
  );
}

export default StaticHeader;
