import axios from 'axios';

export const api = "http://3a2d3bf3.ngrok.io/api/OlhoVivo";

export const getLinhas = (param) =>
  axios.get(`${api}/buscaLinha?buscaLinha=${param}`)

export const getOnibusLinha = (param) =>
  axios.get(`${api}/codigolinhaSensor?codigoLinha=${param}`)
