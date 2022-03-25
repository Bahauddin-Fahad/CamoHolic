import React from "react";
import "./Camera.css";
const Camera = ({ camera }) => {
  console.log(camera);
  const { img, name, brand, price } = camera;
  return (
    <div className="camera">
      <img src={img} alt="" />
      <div className="camera-info">
        <h3>{name}</h3>
        <h5>Brand: {brand}</h5>
        <h6>Price: {price}</h6>
      </div>
      <button className="cart-button">Add to Cart</button>
    </div>
  );
};

export default Camera;
