import React,{Fragment} from "react";
import PropTypes from "prop-types";


const LineChart = ({
  data,
  height,
  width,
  horizontalGuides: numberOfHorizontalGuides,
  verticalGuides: numberOfVerticalGuides,
  precision,
  channels
}) => {
  const FONT_SIZE = width /80; 
  const maximumXFromData = Math.max(...data.map(e => e.x));
  const maximumYFromData = Math.max(...data.map(e => e.y));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const Axis = ({ points }) => (
    <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points} />
  );

  const XAxis = () => (
    <Axis
      points={`${padding},${height - padding} ${width - padding},${height -
        padding}`}
    />
  );

  const YAxis = () => (
    <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
  );

  const VerticalGuides = () => {
    const guideCount = numberOfVerticalGuides || data.length - 1;

    const startY = padding;
    const endY = height - padding;

    return new Array(guideCount).fill(0).map((_, index) => {
      const ratio = (index + 1) / guideCount;

      const xCoordinate = padding + ratio * (width - padding * 2);

      return (
        <Fragment key={index}>
          <polyline
            fill="none"
            stroke="#ccc"
            strokeWidth=".5"
            points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
          />
        </Fragment>
      );
    });
  };

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;

    return new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / numberOfHorizontalGuides;

      const yCoordinate = chartHeight - chartHeight * ratio + padding;

      return (
        <Fragment key={index}>
          <polyline
            fill="none"
            stroke={"#ccc"}
            strokeWidth=".5"
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
          />
        </Fragment>
      );
    });
  };

  const convertMS=(value)=> {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let minutes = Math.floor(sec  / 60); // get minutes
    let seconds = sec - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02 
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return +minutes+':'+seconds; // Return is  MM : SS
}

  const LabelsXAxis = () => {
    const y = height - padding + FONT_SIZE * 2;
    const PARTS = numberOfVerticalGuides;
    const pointInterval = 600;
    return data.map((element, index) => {
      const x =
        (element.x / maximumXFromData) * chartWidth + padding - FONT_SIZE / 2;
      return (
        <text
          key={index}
          x={x}
          y={y}
          style={{
            fill: "#808080",
            fontSize: FONT_SIZE,
            fontFamily: "Helvetica"
          }}
        >
          {/* {element.label} */}
          {/* {parseFloat(maximumXFromData * (index / PARTS)).toFixed(precision)} */}
          {convertMS(pointInterval+(index*5))}
         
        </text>
      );
    });
  };

  const LabelsYAxis = () => {
    const PARTS = numberOfHorizontalGuides;
    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = FONT_SIZE;
      const ratio = index / numberOfHorizontalGuides;

      const yCoordinate =
        chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
      return (
        <text
          key={index}
          x={x}
          y={yCoordinate}
          style={{
            fill: "#808080",
            fontSize: FONT_SIZE,
            fontFamily: "Helvetica"
          }}
        >
          {/* {parseFloat(maximumYFromData * (index / PARTS)).toFixed(precision)} */}
          {index=== PARTS?1:index===0?0:''}
        </text>
      );
    });
  };

  
  const generatEquation = (equation)=>{
   // x(t) = 2 sin(2t − 1)
   // y(t) = −4cos(3t+2)
   // 2exp(−αt)cos(βt)
   let points =[];
   let temp = 0;
   for(let i=31;i<471;i+=10){
     if(equation === 'sint')
     temp = Math.abs( 2 * Math.sin(2*i-1))*10+80;
     else if(equation ==='sin')
     temp = Math.abs(Math.sin(i))*10+80;
     else if(equation === 'cos')
     temp = Math.cos(i)*10+80;
     else if (equation === 'cost')
     temp = Math.cos(i-1.75)*10+80;// cos(t − π/2)
     else if (equation === 'tan')
     temp = Math.tan(i)*4+133;
     else if(equation === 'sec')
     temp = (1/Math.cos(i))*4+120;// Math.cos(i*4)*10+80;// 2n k - 2 *n
     else if(equation === 'csc')
     temp = (1/Math.sin(i))+110;
     else 
     temp = -4*Math.cos(3*i+2)*10+80;
     points.push({x:i,y:temp});
   }

   let d = ""
        
   points.forEach((p, i) => {
       if (i === 0) {
           // first point
           d += "M "
       } else if (i%2 === 0) {
           // quadratic
           d += `Q ${ p.x } ${ p.y } `
       } else {
           // cubic
           d += `C ${p.x } ${ p.y } ${ p.x } ${ p.y } `
       } 

       d += `${ p.x } ${ p.y } `
   })

   return d;
  }

 
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      //style={{ border: "0.5px solid #ccc" }}
    >
      <XAxis />
      <LabelsXAxis />
      <YAxis />
      <LabelsYAxis />
      {numberOfVerticalGuides && <VerticalGuides />}
      <HorizontalGuides />
      {/* list of channels path */}
      {/* <path d={generatEquation()} stroke="red"   strokeWidth="0.5" fill="none"/>
      <path d={generatEquation('sint')} stroke="blue"   strokeWidth="0.5" fill="none"/>
      <path d={generatEquation('cos')} stroke="green"   strokeWidth="0.5" fill="none"/>
      <path d={generatEquation('sin')} stroke="pink"   strokeWidth="0.5" fill="none"/>
      <path d={generatEquation('cost')} stroke="orange"   strokeWidth="0.5" fill="none"/>
      <path d={generatEquation('tan')} stroke="black"   strokeWidth="0.5" fill="none"/>
      <path d={generatEquation('sec')} stroke="yellow"   strokeWidth="0.5" fill="none"/>
      <path d={generatEquation('csc')} stroke="gray"   strokeWidth="0.5" fill="none"/> */}
      {
        channels.map(channel => (
          !channel.disabled &&
          <path key={channel.id} d={generatEquation(channel.equation)} stroke={channel.color}  strokeWidth="0.5" fill="none"/>
        ))
      }
      {/* list of sliping period */}
      <rect x="31" y="31" width="36" height="138" fill="rgb(105,105,105)" style={{opacity:"0.2"}} />
      <rect x="36" y="31" width="43" height="138" fill="rgb(105,105,105)" style={{opacity:"0.45"}} />
      <rect x="79" y="31" width="5" height="138" fill="rgb(105,105,105)" style={{opacity:"0.2"}} />      
    </svg>
  );
};

LineChart.defaultProps = {
  height: 200,
  width: 500,
  horizontalGuides: 4,
  verticalGuides: null,
  precision: 2
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string
    })
  ).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  horizontalGuides: PropTypes.number,
  verticalGuides: PropTypes.number,
  precision: PropTypes.number
};

export default LineChart;