//http://api.weatherapi.com/v1/forecast.json?key=f236869843a145fbad2204531232007&q=West Chester, Ohio&days=10&aqi=yes&alerts=yes

import { useMutation, useQuery } from "react-query";
import axios from "axios";

export type ForecastData = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: string;
    lon: string;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    temp_f: string;
    wind_mph: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_f: string;
        condition: {
          icon: string;
          text: string;
        };
      };
    }[];
  };
};

type ForecastReq = {
  location: string;
};

export const useWeatherForecast = () => {
  return useMutation<ForecastData, Error, ForecastReq>(
    async (location: ForecastReq) => {
      const { data } = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=f236869843a145fbad2204531232007&q=${location}&days=7&aqi=yes&alerts=yes`
      );
      return data;
    }
  );
};

export default useWeatherForecast;
