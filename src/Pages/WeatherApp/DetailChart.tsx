import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useForecast } from "./ForecastContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "24 hours weather forecast",
    },
  },
};

export default () => {
  const { forecastData } = useForecast();

  console.log({forecastData})

  const labels = forecastData?.hour?.map((item) => item?.time.substring(18, 11));

  const data = {
    labels,
    datasets: [
      {
        label: "temp",
        data: forecastData?.hour?.map((item) => item?.temp_f),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
