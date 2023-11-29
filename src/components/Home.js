import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Home.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/list");
    setProducts(result.data);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalAmount(totalAmount + product.cost);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    const removedItem = updatedCart.splice(index, 1)[0];
    setCart(updatedCart);
    setTotalAmount(totalAmount - removedItem.cost);
  };

  return (
    <div className='container'>
      <div>
        <table>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Cost</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.cost}</td>
                <td>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Cost</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.cost}</td>
                <td>
                  <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Amount:</td>
              <td>{totalAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
