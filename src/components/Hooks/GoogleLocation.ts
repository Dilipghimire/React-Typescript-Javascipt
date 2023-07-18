import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

type LocationData = {
  address: string;
  latitude: number;
  longitude: number;
};

const API_KEY = process.env;

console.log(API_KEY)

const useGetLocation = (zipCode: string) => {
  return useQuery<LocationData, Error>(["LocationData", zipCode], async () => {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${API_KEY}`
    );
    return data.results[0];
  });
};

export default useGetLocation;
