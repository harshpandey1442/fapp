// import logo from './logo.svg';
import './App.css';
import Food from './components/Food/Food';
import StaticHeader from './components/StaticHeader/StaticHeader';
import TextContainer from './components/UI/TextContainer/TextContainer';
import React, { useState } from "react";

import data from './data'
// import { useEffect } from 'react';

// const DUMMY_FOOD = [
//   {
//     id: "f1",
//     food_title: "Pizza",
//     food_description: "Chicken Cheese Pizza with ketchup",
//     price: 250,
//   },
//   {
//     id: "f2",
//     food_title: "Burger",
//     food_description: "American Style Chicken Cheese Burger with french fries",
//     price: 460,
//   },
//   {
//     id: "f3",
//     food_title: "Shawarma",
//     food_description: "Arabian Style Chicken Shawarma",
//     price: 350,
//   },
//   {
//     id: "f4",
//     food_title: "Biriyani",
//     food_description: "Chicken Tandoori Biriyani with Vegetable-Salad",
//     price: 250,
//   },
// ];

function App() {
// const App = () =>{

  // const DUMMY_FOOD = [
  //   {
  //     id: "1",
  //     food_title: "Pizza",
  //     food_description: "Chicken Cheese Pizza with ketchup",
  //     price: 250,
  //   },
  //   {
  //     id: "2",
  //     food_title: "Burger",
  //     food_description: "American Style Chicken Cheese Burger with french fries",
  //     price: 460,
  //   },
  //   {
  //     id: "3",
  //     food_title: "Shawarma",
  //     food_description: "Arabian Style Chicken Shawarma",
  //     price: 350,
  //   },
  //   {
  //     id: "4",
  //     food_title: "Biriyani",
  //     food_description: "Chicken Tandoori Biriyani with Vegetable-Salad",
  //     price: 250,
  //   },
  //   {
  //     id: "5",
  //     food_title: "Vanilla Sponge Cake",
  //     food_description: "Vanilla Sponge Cake with Cream",
  //     price: 250,
  //   },
  //   {
  //     id: "6",
  //     food_title: "Falooda",
  //     food_description: "Falooda with ice-cream, fruit and nuts!",
  //     price: 250,
  //   },
  //   {
  //     id: "7",
  //     food_title: "Chicken Cheese Samosa",
  //     food_description: "Chicken cheese samosa with mayonnaise and ketchup!",
  //     price: 250,
  //   },
  // ];

  // const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState(data.products)
  console.log("Pro in app->", products)
  console.log("data in app->", data)
  console.log("data.Pro in app->", data.products)

  // useEffect(()=>{
  //   setProducts(data.products)
  // },[])

  const setQuantity = (id, quantity) =>{
  const myFood = products.filter(food => food.id === id)[0]
  myFood.quantity = quantity
  console.log("myfood in app-> ", myFood)

  // const exist = cartItems.find((x) => x.id === id);
  setProducts(
    products.map((x) => x.id === id ? myFood : x)
  )

  }

  const onAddInsideCart = (product, quantity) => {
    
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty + 1 } : x
        )
      );
    }else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

    const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">

      <StaticHeader countCartItems={cartItems.length} cartItems={cartItems} products={products} onRemove={onRemove} onAdd={onAdd}/>
      
      <TextContainer />

      <Food products={products} onAdd={onAdd} setQuantity={setQuantity}/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
