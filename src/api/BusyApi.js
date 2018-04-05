import axios from 'axios';

export const api = "http://buzy.azurewebsites.net/api/OlhoVivo";

export const getLinhas = (param) =>
  axios.get(`${api}/buscaLinha?buscaLinha=${param}`)

export const getOnibusLinha = (param) =>
  axios.get(`${api}/codigolinhaSensor?codigoLinha=${param}`)
