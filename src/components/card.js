import React from "react";
import numeral from "numeral";
import "./card.css";

const MediaCard = (props) => {
  const convertNumerals=(num)=>{
    return numeral(num).format("0a").toString().toUpperCase();
  }
  return (
    <div className="sub-container">
      <div>
        <img className="country-img" src={props.countryObj.countryInfo.flag} />
      </div>
      <div className="country-info">
        <div>Country : {props.countryObj.country}</div>
         <div>Total Population : {convertNumerals(props.countryObj.population)}</div>
        <div>Total Cases : {convertNumerals(props.countryObj.cases)}</div>
        <div>Deaths : {convertNumerals(props.countryObj.deaths)}</div>
        <div>Recovered : {convertNumerals(props.countryObj.recovered)}</div>
        <div>Active Cases : {convertNumerals(props.countryObj.active)}</div>
      </div>
    </div>
  );
};

export default MediaCard;
