const API = process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export function get(url){
    return fetch(API+url, {
        headers:{
            Authorization: "Bearer " +API_TOKEN,
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then(result => result.json());
}