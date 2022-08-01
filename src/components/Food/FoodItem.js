import React, { useState } from "react";
import Card from "../UI/Card/Card";
import data from "../../data";
import "./FoodItem.css";

function FoodItem(props) {
  const { product, onAdd, setQuantity } = props;

  const [foodQuantity, setFoodQuantity] = useState(product.quantity);

//   const handleAddToCart = (product) => {
    
//   }

  const handleQuantityClick = (event) => {
    console.log("Here--> ", data);
    setFoodQuantity(event.target.value);
    setQuantity(product.id, event.target.value);
  };

  return (
    <Card>
      <div className="food-details">
        <div className="food-title">
          {/* <h5>{props.food_title}</h5> */}
          <h5>{product.food_title}</h5>
        </div>
        <div className="food-desc">
          {/* <h5>{props.food_description}</h5> */}
          <h5>{product.food_description}</h5>
        </div>
        <div className="food-amount">
          {/* <h3>${props.food_price}</h3> */}
          <h3>${product.price}</h3>
        </div>
      </div>
      <div className="food-right">
        <div className="food-right-top">
          <div className="food-amount food-inline">
            <h5>Quantity</h5>
          </div>
          <div className="food-amount food-inline">
            <input
              type="number"
              min="1"
              max="5"
              value={foodQuantity}
              onChange={handleQuantityClick}
            />
            {/* <select value={foodQuantity} onChange={handleQuantityClick}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
            </select> */}
          </div>
        </div>
        <div className="food-right-bottom">
          <div>
            <button
              onClick={() => {
                onAdd(product);
                // handleAddToCart(product);
                console.log("Food Details -->>", product);
              }}
              className="food-add-button"
            >
              {" "}
              + Add
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FoodItem;
