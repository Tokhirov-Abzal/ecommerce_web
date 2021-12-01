import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Freezer" },
      { id: 2, name: "Smartphone" },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];

    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 20000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
      {
        id: 2,
        name: "Iphone 13 pro",
        price: 25000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
      {
        id: 3,
        name: "Iphone 14 pro",
        price: 27000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
      {
        id: 4,
        name: "Iphone 15 pro",
        price: 28000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
      {
        id: 5,
        name: "Iphone 15 pro",
        price: 28000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
      {
        id: 6,
        name: "Iphone 15 pro",
        price: 28000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
      {
        id: 7,
        name: "Iphone 15 pro",
        price: 28000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
      {
        id: 8,
        name: "Iphone 15 pro",
        price: 28000,
        rating: 5,
        img: "https://place-hold.it/300x300",
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
