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
     
        <FoodItem key={product.id} product={product} onAdd={onAdd} setQuantity={setQuantity} ></FoodItem>
      ))}
      
    </div>
  );
}

export default Food;
