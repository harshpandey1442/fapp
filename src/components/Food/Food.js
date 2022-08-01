// import Card from "../UI/Card/Card";
import "./Food.css";
import FoodItem from "./FoodItem";

// import React, {useState} from 'react';

function Food(props) {

  const { products, onAdd, setQuantity } = props;
  console.log("Products->", products);

  return (
    <div className="foods card-wrapper">
      {products.map((product) => (
        // quantity={product.quantity}
        <FoodItem key={product.id} product={product} onAdd={onAdd} setQuantity={setQuantity} ></FoodItem>
      ))}
      {/* <FoodItem
        food_title={props.items[0].food_title}
        food_description={props.items[0].food_description}
        food_price={props.items[0].price}
      ></FoodItem>
       <FoodItem
        food_title={props.items[1].food_title}
        food_description={props.items[1].food_description}
        food_price={props.items[1].price}
      ></FoodItem>
       <FoodItem
        food_title={props.items[2].food_title}
        food_description={props.items[2].food_description}
        food_price={props.items[2].price}
      ></FoodItem>
       <FoodItem
        food_title={props.items[3].food_title}
        food_description={props.items[3].food_description}
        food_price={props.items[3].price}
      ></FoodItem>
      <FoodItem
        food_title={props.items[4].food_title}
        food_description={props.items[4].food_description}
        food_price={props.items[4].price}
      ></FoodItem>
      <FoodItem
        food_title={props.items[5].food_title}
        food_description={props.items[5].food_description}
        food_price={props.items[5].price}
      ></FoodItem>
      <FoodItem
        food_title={props.items[6].food_title}
        food_description={props.items[6].food_description}
        food_price={props.items[6].price}
      ></FoodItem> */}
    </div>
  );
}

export default Food;
