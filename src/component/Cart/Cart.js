// Import Files //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

// Component //
const Cart = ({ camera, removeItem }) => {
  const { id, img, name } = camera;
  return (
    <div>
      <div className="cart">
        <div className="camera-details">
          <img src={img} alt="" />
          <h6>{name}</h6>
          <button className="remove-button" onClick={() => removeItem(id)}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
