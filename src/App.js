import React, { useEffect, useState } from "react";
import MediaCard from "./components/card";
import "./App.css";

const App = () => {
  const [coronaData, setdata] = useState([]);
  const [searchedCountry, setCountry] = useState("");
  const getCoronaData = async () => {
    const responce = await fetch(
      `https://corona.lmao.ninja/v2/countries?sort=country`
    );
    const data = await responce.json();
    setdata(data);
  };

  useEffect(() => {
    getCoronaData();
  }, []);

  const filterCountries = coronaData.filter((item) => {
    return searchedCountry !== ""
      ? item.country.toLowerCase().includes(searchedCountry.toLowerCase())
      : item;
  });

  return (
    <div className="root">
      <div className="title">Covid Tracker Live</div>
      <div className="search-box">
        <input
          type="text"
          className="input-box"
          value={searchedCountry.toUpperCase()}
          placeholder="Search for Country"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="container">
        {filterCountries.map(
          (obj, key) => obj && <MediaCard key={key} countryObj={obj} />
        )}
      </div>
    </div>
  );
};

export default App;
