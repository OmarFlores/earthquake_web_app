/**
 * Created by Jaguar on 8/24/18.
 */
import React, { Component } from 'react';
import {
    Map,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {getNumberOfRecordsByFlag} from '../utils/USGSDataTrans'
const moment = require('moment');

export default class MapUI extends Component {

    state = {
        position: [40.7099994,-99.6154004],
        zoom: 3,
        animate: true,
        style: null,
        dataformap:[],
        dataforchart:{},
        pointselected:{},
        lat: 36.778259,
        lng: -119.417931,
        viewport: {
            center: [33.5425003,-6.970123],
            zoom: 2,
        },
    };

    styles = {
        map : {
            width: "850px",
            height: "500px"
        }
    };

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({dataformap:nextProps.dataformap});
    }

    render() {
        let markerArr = [];
        const filteredData = getNumberOfRecordsByFlag(this.props.topFilter,this.state.dataformap);
        let current_viewport = this.state.viewport;

        if (filteredData.length > 0){
            current_viewport = (this.props.topFilter > 1) ? {center:[filteredData[0].geometry.coordinates[1],filteredData[0].geometry.coordinates[0]],
                zoom:3} : this.state.viewport;

            filteredData.map( (data) => {
                let posArr = [data.geometry.coordinates[1],data.geometry.coordinates[0]];
                markerArr.push(
                    <Marker key={data.id} position={posArr}>
                        <Popup>{data.properties.place}
                            <br /> Magnitud: {data.properties.mag}
                            <br /> Tsunami alert: {(data.properties.tsunami > 0) ? "YES" :"NO"}
                            <br /> Date: {moment(data.properties.time).format("YYYY/MM/DD HH:mm:ss")}</Popup>
                    </Marker>);}
            );
        }


        return (
            <Map
                viewport={current_viewport}
                center={this.state.position}
                zoom={this.state.zoom}
                style={this.styles.map}
                animate={this.state.animate}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {markerArr}
            </Map>
        );
    }
}
