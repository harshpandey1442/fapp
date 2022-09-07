import React from 'react';
import Card from '../UI/Card/Card';
import './CartItems.css';

export default function CartItems(props) {
    // const { product} = props;

    const { cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((menu, amount) => menu + amount.qty * amount.price, 0);

  return (
    <Card>
        {cartItems.length === 0 && <div>Your Cart is Empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.food_title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                Remove
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                Add
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} * ${item.price.toFixed(1)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(1)}</div>
            </div>
            
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${itemsPrice.toFixed(1)}</strong>
              </div>
            </div>
            <hr />
            <div className="row forCheckoutbutton">
              <button onClick={() => alert('Order Successful')} className="checkout-button">
                Order
              </button>
            </div>
          </>
        )}
    </Card>
    
  )
}
