import React from "react";
import { useState, useEffect } from "react";
import Camera from "../Camera/Camera";
import Cart from "../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  const [cameras, setCameras] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (camera) => {
    const newCart = [...cart, camera];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("cameras.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="cameras-container">
        {cameras.map((camera) => (
          <Camera
            key={camera.id}
            camera={camera}
            handleAddToCart={handleAddToCart}
          ></Camera>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        {cart.map((camera) => (
          <Cart key={camera.id} camera={camera}></Cart>
        ))}
        <div className="buttons">
          <button id="choose-button">Choose 1 For Me</button>
          <button id="choose-again-button">Choose Again</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
