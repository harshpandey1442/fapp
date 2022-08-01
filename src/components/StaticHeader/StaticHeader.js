// import CartDesign from '../CartDesign/CartDesign';
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
  
  const {products} = props;

  const [isOpen, setIsOpen] = useState(false);

//   const [cartItems, setCartItems] = useState([]);

//   const onAdd = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if(exist){
//       setCartItems(
//         cartItems.map((x) => 
//           x.id === product.id ? {...exist, qty: exist.qty + 1 } : x
//         )
//       );
//     }else{
//       setCartItems([...cartItems, {...product, qty: 1}]);
//     }
//   };

//   const onRemove = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter((x) => x.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//         )
//       );
//     }
//   };

  return (
    // style={OTHER_CONTENT_STYLES}
    <div className="blink-cover" style={OTHER_CONTENT_STYLES}>
      <div className="blink2">
        <span>
          <p>ONLINE FOOD APP</p>
        </span>

        {/* <div className="place-cart">
                    <CartDesign />
                </div> */}
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
          {/* Cart{' '}
                    {props.countCartItems ? (
                        <div className="cart-counter">
                            <button className='cart-button'>{props.countCartItems}</button>
                        </div>
                    ) : (
                        ''
                    )} */}
        </a>{" "}
      </div>

      <MyCartModal open={isOpen} onClose={() => setIsOpen(false)}>
        Your Items are here!
        <br/><br/>
        <CartItems
            cartItems={props.cartItems}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            products={products}
        ></CartItems>

        {/* <div>Hello : {props}</div> */}
      </MyCartModal>
    </div>
  );
}

export default StaticHeader;
