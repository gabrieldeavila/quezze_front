import axios from "axios";

export const apiQuezze = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});
