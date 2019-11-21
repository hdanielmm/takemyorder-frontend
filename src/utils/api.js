import axios from 'axios';

// Retorna una promesa
export function getItems() {
  return axios.get('https://api.punkapi.com/v2/beers/');
}

export function getPedidos(){
  return axios.get("http://takemyorder-backend.herokuapp.com");
};