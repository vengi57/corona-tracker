import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./card.css";

const data = [
  {
    name: "active",
    value: 4000,
  },
  {
    name: "population",
    value: 3000,
  },
  {
    name: "Page C",
    value: 2000,
  },
  {
    name: "Page D",
    value: 2780,
  },
  {
    name: "Page E",
    value: 1890,
  },
  {
    name: "Page F",
    value: 2390,
  },
  {
    name: "Page G",
    value: 3490,
  },
];

const Example = (props) => {
  return (
    <div className="wrapper">
      <BarChart
    //   className="bar-chart"
        width={700}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name"  />  
        {/* <YAxis/> */}
        <Tooltip/>
        <Legend />

        <Bar dataKey="cases" fill="#B1D0FD" />
        <Bar dataKey="deaths" fill="red" />
        <Bar dataKey="recovered" fill="#7EECC0" />
      </BarChart>
    </div>
  );
};

export default Example;
