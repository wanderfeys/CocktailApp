import * as axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export const getDrinkByFilter = (filter) => {
  return axiosUrl.get(`filter.php?c=${filter}`);
};

export const getFiltersList = () => axiosUrl.get(`list.php?c=list`);
