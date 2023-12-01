import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function SimpleCounter (props) {
  const digitSix = props.digitSix || 0;
  const digitFive = props.digitFive || 0;
  const digitFour = props.digitFour || 0;
  const digitThree = props.digitThree || 0;
  const digitTwo = props.digitTwo || 0;
  const digitOne = props.digitOne || 0;

  return (
    <div className="timer">
      <div className="d-flex justify-content-evenly align-items-center bg bg-danger">
        <div className="clock">
          <p style={{ fontSize: "60px", marginBottom: "0", lineHeight: "60px" }}>🕒</p>
        </div>
        <div className="six">{digitSix % 10}</div>
        <div className="five">{digitFive % 10}</div>
        <div className="four">{digitFour % 10}</div>
        <div className="three">{digitThree % 10}</div>
        <div className="two">{digitTwo % 10}</div>
        <div className="one">{digitOne % 10}</div>
      </div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitSix: PropTypes.number,
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
}

let counter = 0;

setInterval(function()  {
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(six, five, four, three, two , one);
  counter++;

  ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
    document.querySelector('#app')
  );
}, 1000);

export default SimpleCounter;