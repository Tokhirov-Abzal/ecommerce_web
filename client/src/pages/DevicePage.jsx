import React from "react";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 12 pro",
    price: 20000,
    rating: 5,
    img: "https://place-hold.it/300x300",
  };

  return (
    <div>
      <img src={device.img} alt="" />
      <h2>{device.name}</h2>
      <h2>{device.price}</h2>
    </div>
  );
};

export default DevicePage;
