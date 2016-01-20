import axios from 'axios'

function getCows(){
  return axios.get(`https://gangstercows.herokuapp.com/api/v1/cows`);
}

function getCow(cowId){
  return axios.get(`https://gangstercows.herokuapp.com/api/v1/cows/${cowId}`);
}


export default function getCowInfo(cowId){
  return axios.all([getCows(), getCow(cowId)])
    .then((array) => {
      return {
        cowList: array[0].data,
        cowDetails: array[1].data
      }
    })
}
