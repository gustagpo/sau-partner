import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("@sau_benefits_token");

export const api = axios.create({
  baseURL: "http://localhost:3333/api/v1/",

  headers: {
    Authorization: `Bearer ${token}`,
  },
});
