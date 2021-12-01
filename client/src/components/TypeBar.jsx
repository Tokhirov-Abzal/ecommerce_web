import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ul className="sidebar">
      {device.types.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            device.setSelectedType(item);
          }}
          className={item.id === device.selectedType.id ? "active" : ""}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
});

export default TypeBar;
