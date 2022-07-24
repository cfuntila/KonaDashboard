import React from 'react';
import { Pie } from 'react-chartjs-2';
import Data from '../../Data.json';
import alasql from 'alasql';

const green = alasql('SELECT COUNT(Selection) as green FROM ? WHERE Selection == "green"', [Data]);
const greenHeartReports = green[0]["green"];

const yellow = alasql('SELECT COUNT(Selection) as yellow FROM ? WHERE Selection == "yellow"', [Data]);
const yellowHeartReports = yellow[0]["yellow"];

const red = alasql('SELECT COUNT(Selection) as red FROM ? WHERE Selection == "red"', [Data]);
const redHeartReports = red[0]["red"];

const data = {
  labels: ['green', 'yellow', 'red'],
  datasets: [
    {
      label: '# of RYG Hearts',
      data: [greenHeartReports, yellowHeartReports, redHeartReports],
      backgroundColor: [
        '#2ecc71',
        '#f1c40f',
        '#e74c3c',
      ],
      borderColor: [
        '#27ae60',
        '#f39c12',
        '#c0392b',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
    return (
        <div>
             <Pie data={data} />
        </div>
    )
}

export default PieChart;