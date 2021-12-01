import React from "react";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
const Shop = () => {
  return (
    <div className="shop__container">
      <aside className="shop__side">
        <TypeBar />
      </aside>
      <main className="shop__main">
        <BrandBar />
        <DeviceList />
      </main>
    </div>
  );
};

export default Shop;
