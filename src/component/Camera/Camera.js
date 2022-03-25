import React from "react";

const Camera = ({ camera }) => {
  console.log(camera);
  const { img, name, price } = camera;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Camera;
