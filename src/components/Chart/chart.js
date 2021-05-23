import React from "react";
import LineChart from "../lineChart/lineChart";
import './chart.scss';



const data = [

  {  x: 0, y: 0 },

  {  x: 1, y: 400 },

  {  x: 2, y: 300 },

  {  x: 3, y: 100 },

  {  x: 4, y: 400 },

  {  x: 5, y: 500 },

  {  x: 6, y: 400 },

  {  x: 7, y: 400 },

  {  x: 8, y: 300 },

  {  x: 9, y: 100 },

  {  x: 10, y: 400 },

  {  x: 11, y: 500 },

  {  x: 12, y: 400 }

];



function Chart(props) {
  // p 25, w 700
  return (

    <div className="chart" style={{ padding: 25, maxWidth: 1200}}>

      <LineChart

        data={data}

        horizontalGuides={10}

        precision={0}

        verticalGuides={12}

        channels={props.channels}

      />

    </div>

  );

}



export default Chart;