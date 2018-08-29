/**
 * Created by Jaguar on 8/25/18.
 */
import React, { Component } from 'react';
import MapUIContainer from '../map/MapUIContainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FiltersUI from '../ui-components/FiltersUI';
import BarChart from '../charts/BarChart';
import QuakeLegendUI from '../ui-components/QuakeLegendUI';
import CardContent from "@material-ui/core/CardContent/CardContent";
import Card from "@material-ui/core/Card/Card";
import {top_five,top_ten,all_events} from '../utils/Consntants'

export default class MainView extends Component {

    state = {
        topfive : true,
        topten  : false,
        alldata : false,
        topFilter : top_five,
    };

    styles = theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        card: {
            minWidth: 200,
        }
    });

    handleNumberOfEvents = (numberEvents) => {
        if(numberEvents => all_events && numberEvents <= top_ten)
            this.setState({topFilter:numberEvents});
        else
            this.setState({topFilter:top_five});

    } ;

    render(){
        return(

            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Card styles={this.styles.card}>
                        <CardContent>
                                Earthquake Visualizer
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={this.styles.paper}>
                        <MapUIContainer
                            dataformap={this.props.dataformap}
                            topFilter = {this.state.topFilter}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={this.styles.paper}>
                        <FiltersUI
                            updateMainViewState={this.props.updateMainViewState}
                            selectPointInMap={this.props.selectPointInMap}
                            fetchAPICharts={this.props.fetchAPICharts}
                            handleNumberOfEvents={this.handleNumberOfEvents}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={this.styles.paper}>
                        <BarChart
                            topFilter = {this.state.topFilter}
                            dataformap={this.props.dataformap}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={this.styles.paper}>
                        <QuakeLegendUI/>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}
