// import logo from './logo.svg';
import './App.css';
import Food from './components/Food/Food';
import StaticHeader from './components/StaticHeader/StaticHeader';
import TextContainer from './components/UI/TextContainer/TextContainer';
import React, { useState } from "react";

import data from './data'
function App() {

  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState(data.products)
  console.log("Pro->", products)
  console.log("data->", data)
  console.log("data.Pro->", data.products)

  // useEffect(()=>{
  //   setProducts(data.products)
  // },[])

  const setQuantity = (id, quantity) =>{
  const myFood = products.filter(food => food.id === id)[0]
  myFood.quantity = quantity
  console.log("myfood-> ", myFood)

  // const exist = cartItems.find((x) => x.id === id);
  setProducts(
    products.map((x) => x.id === id ? myFood : x)
  )

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

      <StaticHeader countCartItems={cartItems.length} cartItems={cartItems} products={products.length} onRemove={onRemove} onAdd={onAdd}/>
      
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
