var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export function getFact() {
    return fetch("https://catfact.ninja/fact?max_length=140", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  
}

const BASE_URL = 'https://project-3-catfacts.herokuapp.com/api/users';

function addFavorite() {
    return fetch(BASE_URL + '/favorites', {
    method: 'POST',
}).then(res => res.json());
}

function getFavorite(){
return fetch(BASE_URL + '/favorites', {
    method: 'GET',
}).then(res => res.json());
}

export {
    addFavorite,
    getFavorite
};