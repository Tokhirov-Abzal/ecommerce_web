import React from "react";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div
      className="card__container"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <img width={150} height={150} src={device.img} alt="" />
      <h2>{device.name}</h2>
      <h2>{device.price}</h2>
      <h2>{device.rating}</h2>
    </div>
  );
};

export default DeviceItem;
