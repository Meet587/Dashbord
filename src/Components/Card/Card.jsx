import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expended, setExpended] = useState(true);
  return (
    <LayoutGroup id="a">
      {expended ? (
        <ExpendedCard param={props} setExpended={() => setExpended(false)} />
      ) : (
        <CompactCard param={props} setExpended={() => setExpended(true)} />
      )}
    </LayoutGroup>
  );
};

// CompactCard
function CompactCard({ param, setExpended }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpended}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  );
}

//ExpendedCard
function ExpendedCard({ param, setExpended }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enbled: false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color:"#000",
        opacity:0.35
      },
      fill:{
        color:['#fff'],
        type:'gradient',
      },
      dataLabels:{
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors:['#fff']
      },
      tooltip: {
        x:{
          format: "dd/MM/yy HH:mm",
        },
      },
      grid:{
        show: true,
      },
      // xaxis:{
      //   type: "datetime",
      // }
    },
  };
  return (
    <motion.div
      className="ExpendedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div onClick={setExpended}>
        <UilTimes />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  );
}

export default Card;