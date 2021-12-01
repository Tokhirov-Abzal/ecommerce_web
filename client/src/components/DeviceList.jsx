import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="device__container">
      {device.devices.map((device) => (
        <DeviceItem device={device} key={device.id} />
      ))}
    </div>
  );
});

export default DeviceList;
