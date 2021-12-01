import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ul className="brand_container">
      {device.brands.map((brand) => (
        <li
          key={brand.id}
          className={brand.id === device.selectedBrand.id ? "active" : ""}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </li>
      ))}
    </ul>
  );
});

export default BrandBar;
