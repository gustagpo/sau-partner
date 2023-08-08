import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("@sau_benefits_token");

export const api = axios.create({
  baseURL: "https://ws.saubeneficios.com.br/api/v1/",

  headers: {
    Authorization: `Bearer ${token}`,
  },
});
