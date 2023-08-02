"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import { useRouter } from "next/navigation";

const SearchBar = () => {

  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill the search items.");
    }
    updateSearchParams( manufacturer.toLowerCase(),model.toLowerCase() );
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName ,{scroll:false});
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute ml-4"
        />
        <input
          className="searchbar__input"
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tigaun"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
