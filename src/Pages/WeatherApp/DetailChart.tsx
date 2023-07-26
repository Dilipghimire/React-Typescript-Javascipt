import React, { useEffect, useMemo } from "react";
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
import { Div } from "../../components/Tags/Tags";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";

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
      text: `24 hours weather forecast`,
    },
  },
};

export default () => {
  const { forecastData } = useForecast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!forecastData) {
      navigate("../weather");
    }
  }, [forecastData]);

  const labels = forecastData?.hour?.map((item) =>
    item?.time.substring(18, 11)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "temp",
        data: forecastData?.hour?.map((item) => item?.temp_f),
        borderColor: "black",
        backgroundColor: "black",
      },
    ],
  };

  return (
    <Div
      $css={css`
        width: 50vw;
        margin: 0 auto;
      `}
    >
      <Line options={options} data={data} />
    </Div>
  );
};
