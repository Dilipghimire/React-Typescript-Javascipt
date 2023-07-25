import styled, { css } from "styled-components";
import { Div } from "../../components/Tags/Tags";
import bg from "./bg.jpg";
import FormikInput from "../../components/Formik/FormikInput";
import { Form, Formik, useFormik, useFormikContext } from "formik";
import SearchIcon from "../../SVG/SearchIcon";
import useWeatherForecast from "../../components/Hooks/GetWeatherForecast";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { format, getDay, getTime, parseISO } from "date-fns";
import WeeklyWeather from "./WeeklyWeather";
import DetailChart from "./DetailChart";
import { ForecastProvider } from "./ForecastContext";

const WeatherContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 2px 0px #2d2d2d;
  border-radius: 5px;
  padding: 0px 30px 0 30px;
  width: 50vw;

  img {
    width: 6rem;
    height: 6rem;
    margin-right: 30px;
  }
  span {
    font-size: 22px !important;
    font-weight: 600;
  }
  dt:nth-of-type(1) {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 600;
  }
  dt:nth-of-type(2) {
    margin-top: 8px;
  }

  * {
    font-family: serif;
  }
`;

const WeeklyForecast = styled.div`
  position: absolute;
  box-shadow: 0px 0px 2px 0px #2d2d2d;
  padding: 12px;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const SearchBox = ({ mutateAsync }: { mutateAsync: any }) => {
  const { values, touched } = useFormikContext<{
    location: string;
  }>();

  useEffect(() => {
    if (touched && values.location && values.location !== "") {
      mutateAsync(values.location);
    }
  }, [touched]);

  return (
    <Form>
      <FormikInput
        $css={css`
          width: 25vw !important;
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
        name="location"
        placeholder="Enter a Zip, State...."
      />
    </Form>
  );
};

export default () => {
  const { data, mutateAsync } = useWeatherForecast();

  return (
      <Div
        $css={css`
          position: relative;

          img {
            width: 100vw;
            height: 100vh;
          }
        `}
      >
        <img src={bg} />

        <Formik
          initialValues={{ location: 45069 }}
          onSubmit={() => {
            //console.log()
          }}
        >
          <SearchBox mutateAsync={mutateAsync} />
        </Formik>
        <WeatherContainer>
          <Div
            $css={css`
              display: flex;
              align-items: center;
            `}
          >
            <img src={data?.current?.condition?.icon} />
            <div>
              <p>Today</p>
              <dl>
                <dt>{data?.location?.name}</dt>
                <dt>Temperature: {data?.current?.temp_f}</dt>
                <dt>{data?.current?.condition?.text}</dt>
              </dl>
            </div>
          </Div>
          {data && <WeeklyWeather data={data} />}
        </WeatherContainer>
      </Div>
  );
};
