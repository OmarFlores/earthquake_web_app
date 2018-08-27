/**
 * Created by Jaguar on 8/26/18.
 */
import React, { Component } from 'react';
import MainView from './MainView';
import {fetchJsonPAPI} from '../utils/APIUtils'

export default class MainViewContainer extends Component {
    state = {
        dataformap:[],
        dataforchart:{},
        pointselected:{},
    };

    updateMainViewState = (dataMap, dataChart) => {
        this.setState({dataformap:dataMap,dataforchart:dataChart})
    };

    selectPointInMap = (selectedPoint) =>{
        this.setState({pointselected:selectedPoint});
    };

    fetchAPICharts = () => {
        fetchJsonPAPI()
            .then((data) => {
                const resultdata = data;
                this.setState({dataformap:resultdata.features})
            })
            .catch((err) => {
                console.log("Fatal Err: " + err);
            });
    };

    render() {
        return (
            <MainView
                updateMainViewState={this.updateMainViewState}
                selectPointInMap={this.selectPointInMap}
                fetchAPICharts={this.fetchAPICharts}
                dataformap={this.state.dataformap}
            />
        );
    }
}