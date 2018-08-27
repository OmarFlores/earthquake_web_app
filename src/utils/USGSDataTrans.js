/**
 * Created by Jaguar on 8/26/18.
 */
const moment = require('moment');

export function getNumberOfRecordsByFlag(topNumber,data) {
    let dataFiltered = [];

    data.sort((a,b) =>{
        if (a.properties.mag < b.properties.mag) {
            return 1;
        }
        if (a.properties.mag > b.properties.mag) {
            return -1;
        }
        return 0;
    });

    dataFiltered = (topNumber <= 1 ) ? data : data.slice(0,topNumber);

    return dataFiltered;
}

export function getRecordsForChart(topNumber,data){
    let arrDataChart = [];
    let dataFiltered = [];

    data.map( (featureData)=>{
        let recordQuacke = {mag:featureData.properties.mag,
            timestamp:featureData.properties.time,
            dateformated: moment(featureData.properties.time).format("YYYY/MM/DD HH:mm:ss"),
            place:featureData.properties.place,
            tsunami:featureData.properties.tsunami,
            net:featureData.properties.net,
            id:featureData.id};
        arrDataChart.push(recordQuacke);
    });

    if(topNumber > 1 )
        arrDataChart.sort((a,b) =>{
            if (a.mag < b.mag) {
                return 1;
            }
            if (a.mag > b.mag) {
                return -1;
            }
            return 0;
        });
    else
        arrDataChart.sort((a,b) =>{
            if (a.timestamp > b.timestamp) {
                return 1;
            }
            if (a.timestamp < b.timestamp) {
                return -1;
            }
            return 0;
        });

    dataFiltered = (topNumber <= 1 ) ? arrDataChart : arrDataChart.slice(0,topNumber);

    dataFiltered.sort((a,b) =>{
        if (a.timestamp > b.timestamp) {
            return 1;
        }
        if (a.timestamp < b.timestamp) {
            return -1;
        }
        return 0;
    });

    return dataFiltered;
}