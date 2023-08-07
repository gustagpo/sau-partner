import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("@sau_benefits_token");

export const api = axios.create({
  baseURL: "http://134.122.21.52/api/v1/",

  headers: {
    Authorization: `Bearer ${token}`,
  },
});
