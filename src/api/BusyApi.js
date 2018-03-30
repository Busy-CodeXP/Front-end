import axios from 'axios';

export const api = "http://bdc7bc12.ngrok.io/api/OlhoVivo";

export const getLinhas = (param) =>
  axios.get(`${api}/buscaLinha?buscaLinha=${param}`)

export const getOnibusLinha = (param) =>
  axios.get(`${api}/PosicaoLinha?codigoLinha=${param}`)
