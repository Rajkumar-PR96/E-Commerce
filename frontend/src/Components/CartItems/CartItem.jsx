import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItems, RemoveFromCart } = useContext(ShopContext);
  return (
    <div className='cartItem'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-format cartitem-format-main">
                <img src={e.image} alt="" className='cartitem-product_icon' />
                <p>{e.name}</p>
                <p className='priceTag'>${e.new_price}</p>
                <button className='cartitem_quantity'>{cartItems[e.id]}</button>
                <p className='totalpricetag'>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitem-remove-icon' src={remove_icon} onClick={() => { RemoveFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='Enter promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
