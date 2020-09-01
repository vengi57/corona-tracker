import React, { useEffect, useState } from "react";
import MediaCard from "./components/card";
import Variants from "./components/loader";
import "./App.css";

const App = () => {
  const [coronaData, setdata] = useState([]);
  const loaderArr = [1, 2, 3, 4, 5, 6, 7, 8];
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
          placeholder="Search for country to see the results"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="container">
        {searchedCountry.length > 0
          ? filterCountries.map(
              (obj, key) => obj && <MediaCard key={key} countryObj={obj} />
            )
          : loaderArr.map((index) => <Variants />)}
      </div>
    </div>
  );
};

export default App;
