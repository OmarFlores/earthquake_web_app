/**
 * Created by Jaguar on 8/24/18.
 */
import React, { Component } from 'react';
import {LineChart,CartesianGrid,XAxis,YAxis,Legend,Line,Tooltip} from 'recharts'
import {Typography} from '@material-ui/core'
import {getRecordsForChart} from '../utils/USGSDataTrans';
import LineChartCustomTooltip from './LineChartCustomTooltip';

export default class BarChart extends Component {

    state = {
        dataforchart:[]
    };

    styles = theme => ({
        card: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 12,
        },
        pos: {
            marginBottom: 12,
            fontSize: 12,
        },
        chart :{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        },
        divLineChart:{
            position: "relative"
        }
    });

    lineChartSize = {
            width:800,
            height:400
    };

    render(){
        const dataChart = getRecordsForChart(this.props.topFilter,this.props.dataformap);

        return(
            <div id="divLineChart" style={this.styles.divLineChart}>
                <Typography className={this.styles.title} color="textSecondary">
                    Time series chart of Earthquakes in the world.
                </Typography>
                <LineChart width={this.lineChartSize.width} height={this.lineChartSize.height} data={dataChart}
                           margin={this.styles.chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dateformated" />
                    <YAxis type="number" domain={[0, 'dataMax']}/>
                    <Tooltip content={<LineChartCustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="mag" stroke="#8884d8" />
                </LineChart>
            </div>
        );
    }
}
