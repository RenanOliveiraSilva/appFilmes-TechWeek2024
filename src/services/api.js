import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "36a21f79a7f6b4986b0a3dc0305623cd",
    language: "pt-BR",
  },
});

export default api;
