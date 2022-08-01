import React from 'react';
import Card from '../UI/Card/Card';
import './CartItems.css';

export default function CartItems(props) {
    // const { product} = props;

    const { cartItems, onAdd, onRemove, products } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <Card>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.food_title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div> */}

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${itemsPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row forCheckoutbutton">
              <button onClick={() => alert('Implement Checkout!')} className="checkout-button">
                Checkout
              </button>
            </div>
          </>
        )}
    </Card>
    // <Card>
    //     <div className="food-details">
    //     <div className="food-title">
    //       {/* <h5>{props.food_title}</h5> */}
    //       <h5>{product.food_title}</h5>
    //     </div>
        
    //     <div className="food-amount">
    //       {/* <h3>${props.food_price}</h3> */}
    //       <h3>${product.price}</h3>
    //       &nbsp; &nbsp;
    //       <h4>x {product.quantity}</h4>
    //     </div>
    //   </div>
    // </Card>
  )
}
