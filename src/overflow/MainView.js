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

export default class MainView extends Component {

    state = {
        topfive : true,
        topten  : false,
        alldata : false,
        topFilter : 5,
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
        if(numberEvents > 0 && numberEvents <= 10)
            this.setState({topFilter:numberEvents});
        else
            this.setState({topFilter:5});

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
