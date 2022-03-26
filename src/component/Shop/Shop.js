// Import Files //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState, useEffect } from "react";
import Camera from "../Camera/Camera";
import Cart from "../Cart/Cart";
import "./Shop.css";

// Components //
const Shop = () => {
  const [cameras, setCameras] = useState([]);
  let [cart, setCart] = useState([]);
  const [chosenCart, setChosenCart] = useState([]);

  // Fetching Fake Datas//
  useEffect(() => {
    fetch("cameras.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  // Add To Cart Handler //
  const handleAddToCart = (camera) => {
    let newCart = [];
    if (cart.length < 4) {
      if (cart.indexOf(camera) === -1) {
        newCart = [...cart, camera];
        setCart(newCart);
      } else {
        alert(`${camera.name} Already Selected`);
      }
    } else {
      alert("Can't Add More Than 4 Items");
      return null;
    }
  };

  // Removing Item with Delete Button //
  const removeItem = (clickedItemId) => {
    const filteredCart = cart.filter((camera) => camera.id !== clickedItemId);
    setCart(filteredCart);
  };

  // Random Item Generating //
  const randomContainer = document.getElementById("chosen-section");
  const randomItem = () => {
    const randomId = Math.floor(Math.random() * cart.length);
    const selectedCamera = cart[randomId];
    setChosenCart(selectedCamera);
    randomContainer.style.display = "block";
  };

  // Cart Empty with Choose Again Button
  const emptyCart = () => {
    randomContainer.style.display = "none";
    cart = [];
    setCart(cart);
  };

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
        <h3>Order Summary</h3>
        {cart.map((camera) => (
          <Cart key={camera.id} camera={camera} removeItem={removeItem}></Cart>
        ))}
        {chosenCart && (
          <div id="chosen-section">
            <h5>Randomly Chosen</h5>
            <div id="chosen-camera">
              <img src={chosenCart.img} alt="" />
              <h6>{chosenCart.name}</h6>
              <button className="remove-button ">
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        )}
        <div className="buttons">
          <button id="choose-button" onClick={randomItem}>
            Random Choose
          </button>
          <button id="choose-again-button" onClick={emptyCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
