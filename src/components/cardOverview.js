import React from "react";
import numeral from "numeral";
import "./card.css";

const CardOverview = (props) => {
  const convertNumerals = (num) => {
    return numeral(num).format("0.00a").toString().toUpperCase();
  };
  return (
    <div className="overview-container">
      <div className="overview-content">
        <span style={{ fontSize: "25px" }}>
          Total Population: {convertNumerals(props.data.population)}
        </span>
      </div>
      <div className="overview-content">
        <span style={{ fontSize: "25px" }}>
          Affected Countries: {props.data.affectedCountries}
        </span>
      </div>
      <div className="overview-content">
        <span style={{ fontSize: "25px" }}>
          Total Cases : {convertNumerals(props.data.cases)}
        </span>
      </div>
      <div className="overview-content">
        <span style={{ fontSize: "25px" }}>
          Deaths : {convertNumerals(props.data.deaths)}
        </span>
      </div>
      <div className="overview-content">
        <span style={{ fontSize: "25px" }}>
          Recovered : {convertNumerals(props.data.recovered)}
        </span>
      </div>
      <div className="overview-content">
        <span style={{ fontSize: "25px" }}>
          Active Cases : {convertNumerals(props.data.active)}
        </span>
      </div>
    </div>
  );
};

export default CardOverview;
