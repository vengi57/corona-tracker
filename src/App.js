import React, { useEffect, useState } from "react";
import MediaCard from "./components/card";
import CardOverview from "./components/cardOverview";
import Variants from "./components/loader";
import Example from "./components/chart";
import TextField from "@material-ui/core/TextField";
import "./App.css";

const App = () => {
  const [coronaData, setdata] = useState([]);
  const [coronaDataWorld, setdataWorld] = useState([]);
  const [chartData, setChartData] = useState([]);
  const loaderArr = [1, 2, 3, 4];
  const [searchedCountry, setCountry] = useState("");
  const getCoronaData = async () => {
    const responce = await fetch(
      `https://corona.lmao.ninja/v2/countries?sort=country`
    );
    const data = await responce.json();
    setdata(data);
  };

  const getCoronaDataWorldWide = async () => {
    const responce = await fetch(
      `https://corona.lmao.ninja/v2/all?sort=country`
    );
    const data = await responce.json();
    setdataWorld(data);
    getStructuredData(data);
  };

  const getStructuredData = (data) => {
    let chartArr = [];
    let arr = ["cases", "deaths", "recovered"];
    Object.keys(data).map((val, key) => {
      if (arr.includes(val)) {
        let tempObj = {};
        tempObj = { ...tempObj, name: val, [val]: data[val] };
        chartArr.push(tempObj);
      }
    });

    setChartData(chartArr);
  };

  useEffect(() => {
    getCoronaData();
    getCoronaDataWorldWide();
  }, []);

  const filterCountries = coronaData.filter((item) => {
    return searchedCountry !== ""
      ? item.country.toLowerCase().includes(searchedCountry.toLowerCase())
      : item;
  });

  return (
    <div className="root">
      <div className="title">
        {" "}
        <img src="/images/image4.png" className="title-image" alt=""></img>Covid
        Tracker Live
      </div>
      <div className="info-cards">
        <img src="/images/image1.png" className="info-image" alt=""></img>
        <div className="info-content" style={{ textIndent: "45px" }}>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus.Most people who fall sick with COVID-19
          will experience mild to moderate symptoms and recover without special
          treatment.
        </div>
      </div>
      <div className="info-cards">
        <div className="info-content" style={{ textIndent: "45px" }}>
          To date, there are no specific vaccines or medicines for COVID-19.
          Treatments are under investigation, and will be tested through
          clinical trials. World Health Organization. If you feel sick you
          should rest, drink plenty of fluid, and eat nutritious food. Stay in a
          separate room from other family members, and use a dedicated bathroom
          if possible. Clean and disinfect frequently touched surfaces.
        </div>
        <img src="/images/image2.png" className="info-image" alt=""></img>
      </div>
      <div className="info-cards">
        <img src="/images/image3.png" className="info-image" alt=""></img>
        <div className="info-content">
          To prevent the spread of COVID-19:
          <br />
          &#8226; Clean your hands often. Use soap and water, or an
          alcohol-based hand rub
          <br />
          &#8226; Maintain a safe distance from anyone who is coughing or
          sneezing
          <br />
          &#8226; Don’t touch your eyes, nose or mouth.
          <br />
          &#8226; Cover your nose and mouth with your bent elbow or a tissue
          when you cough or sneeze.
        </div>
      </div>
      <div>
        <div className="tracker-header">COVID-19 CORONAVIRUS PANDEMIC</div>
        <div>
          <Example data={chartData} />
        </div>
        <CardOverview data={coronaDataWorld} />
      </div>
      <br />
      <div className="search-box">
        <input
          type="text"
          className="input-box"
          value={searchedCountry.toUpperCase()}
          placeholder="Search for country to see the results below"
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
