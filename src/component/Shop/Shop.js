import React from "react";
import { useState, useEffect } from "react";
import Camera from "../Camera/Camera";
import Cart from "../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    fetch("cameras.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="cameras-container">
        {cameras.map((camera) => (
          <Camera key={camera.id} camera={camera}></Camera>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
