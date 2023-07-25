import { format, parseISO } from "date-fns";
import styled, { css } from "styled-components";
import { ForecastData } from "../../components/Hooks/GetWeatherForecast";
import { Div } from "../../components/Tags/Tags";
import { ForecastProvider, useForecast } from "./ForecastContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default ({ data }: { data: ForecastData }) => {
  const { addForecastData, forecastData } = useForecast();
  const navigate = useNavigate();

  console.log(forecastData);

  useEffect(() => {
    if (forecastData) {
      navigate("../forecast");
    }
  }, [forecastData]);

  return (
    <Div>
      {data &&
        data?.forecast?.forecastday?.slice(1).map((item, index) => {
          const leftValue = index * 17 + "%";

          return (
            <Div
              key={index}
              onClick={() => {
                addForecastData(data?.forecast?.forecastday?.[index]);
              }}
              $css={css`
                position: absolute;
                box-shadow: 0px 0px 2px 0px #2d2d2d;
                padding: 12px;
                left: ${index === 0 ? `0%` : leftValue};
                width: 95px;
                margin-top: 10px;
                border-radius: 5px;
                cursor: pointer;
                img {
                  width: 3rem !important;
                  height: 3rem !important;
                }
              `}
            >
              <dl>
                <dt>{format(parseISO(item && item?.date), "iiii")}</dt>
                <img src={item.day?.condition?.icon} />
                <dt>
                  {item?.day?.maxtemp_f}
                  <sup>0</sup>f
                </dt>
              </dl>
            </Div>
          );
        })}
    </Div>
  );
};
