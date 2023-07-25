import { createContext, useContext, useState } from "react";

type ForecastData = {
  date: string;
  hour: {
    time: string;
    temp_f: string;
  }[];
};

export type ForecastContextType = {
  forecastData: ForecastData | undefined;
  addForecastData: (newData: ForecastData) => void;
};

const initialValues = {
  forecastData: undefined,
  addForecastData: () => {},
};

export const useForecast = () => {
  return useContext(ForecastContext);
};

const ForecastContext = createContext<ForecastContextType>(initialValues);

export const ForecastProvider = ({ children }: { children: any }) => {
  const [data, setdata] = useState<ForecastData>();

  const addForecastData = (newData: ForecastData) => {
    setdata(newData);
  };

  const contextValue: ForecastContextType = {
    forecastData: data,
    addForecastData: addForecastData,
  };

  return (
    <ForecastContext.Provider value={contextValue}>
      {children}
    </ForecastContext.Provider>
  );
};
