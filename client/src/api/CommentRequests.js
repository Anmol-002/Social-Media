import axios from "axios";

const API = axios.create({
  baseURL: "https://socialmedia-backend-401x.onrender.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const comment = (formData) => API.post("/comment/", formData);
export const getComment=()=>API.get("/comment/");
