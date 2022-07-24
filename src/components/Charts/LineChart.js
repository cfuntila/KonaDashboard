import React from 'react';
// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Data from '../../Data.json';
import alasql from 'alasql';

alasql("CREATE TABLE Kona(Date STRING, Timestamp DOUBLE, Selection STRING)");

const getDate = (epoch) => {
  return new Date(epoch*1000).toISOString().slice(5, 10);
}

Data.map( entry => {
  const date = getDate(entry.Timestamp);
  return alasql("INSERT INTO Kona VALUES (?, ?, ?)", [date, entry.Timestamp, entry.Selection]);
});

const dates = alasql('SELECT DISTINCT Date FROM Kona')
const gHearts = alasql('SELECT COUNT(Selection) as Heart, COUNT(DISTINCT SlackUserId) as User FROM Kona WHERE Selection == "green" GROUP BY Date');
const yHearts = alasql('SELECT COUNT(Selection) as Heart, COUNT(DISTINCT SlackUserId) as User FROM Kona WHERE Selection == "yellow" GROUP BY Date');
const rHearts = alasql('SELECT COUNT(Selection) as Heart, COUNT(DISTINCT SlackUserId) as User FROM Kona WHERE Selection == "red" GROUP BY Date');

const datesArray = dates.map(date => {
  return date['Date'];
});

const gHeartsArray = gHearts.map(heart => {
  return heart['Heart'];
});

const yHeartsArray = yHearts.map(heart => {
  return heart['Heart'];
});

const rHeartsArray = rHearts.map(heart => {
  return heart['Heart'];
});

const data = {
  labels: datesArray,
  datasets: [
    {
      label: "Green",
      data: gHeartsArray,
      fill: false,
      borderColor: "#27ae60"
    },
    {
      label: "Yellow",
      data: yHeartsArray,
      fill: false,
      borderColor: "#f39c12"
    },
    {
      label: "Red",
      data: rHeartsArray,
      fill: false,
      borderColor: "#c0392b"
    }
  ]
};

const LineChart = () => {
  return (
    <Line data={data} />
  )
};

export default LineChart;