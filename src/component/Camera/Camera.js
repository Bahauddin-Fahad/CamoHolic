import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Camera.css";
const Camera = ({ camera, handleAddToCart }) => {
  const { img, name, brand, price } = camera;
  return (
    <div className="camera">
      <img src={img} alt="" />
      <div className="camera-info">
        <h3>{name}</h3>
        <h5>Brand: {brand}</h5>
        <h6>Price: {price}</h6>
      </div>
      <button className="cart-button" onClick={() => handleAddToCart(camera)}>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Camera;
