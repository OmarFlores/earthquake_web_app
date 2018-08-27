/**
 * Created by Jaguar on 8/24/18.
 */
let headers = new Headers();
const apisource = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp";

export function fetchAPI(){
    return fetch(apisource,{
        headers:headers
    }).then((response) => {
        if (response.status !== 200) {
            console.log("Error: " + response.status);
            return;
        } else {
            console.log(response.text());
            return response.json();
        }
        }).catch((err)=>{
        console.log("Fatal Err" + err);
    });
}

export function fetchJsonPAPI(){
    return fetch(apisource)
        .then((response) => response.text())
        .then((responseData) => JSON.parse(responseData.substring(0,responseData.length-2).replace('eqfeed_callback(','')))
        .catch((err)=>{
        console.log("Fatal Err" + err);
    });
}