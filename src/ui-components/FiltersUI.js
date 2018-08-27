/**
 * Created by Jaguar on 8/24/18.
 */
import React, { Component } from 'react';
import {Card,CardContent,Button,Typography,FormControl,RadioGroup,FormControlLabel,Radio} from "@material-ui/core/";
import Divider from '@material-ui/core/Divider';

export default class FiltersUI extends Component {

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
            fontSize: 12,
        },
        divider: {
            margin: `${theme.spacing.unit * 2}px 0`,
        },
    });

    state = {
        topdatarecords: "5",
    };

    loadDataSetFromUSGS = () =>{
        this.props.fetchAPICharts();
    };

    handleStateChangeRadioButton = event =>{
        this.setState({ topdatarecords: event.target.value });
        this.props.handleNumberOfEvents(parseInt(event.target.value))
    };


    render(){
        return(
        <div id="filterUIid">
            <Card styles={this.styles.card}>
                <CardContent>
                    <Typography className={this.styles.title} color="textSecondary">
                        Press the LOAD DATA to read data from the USGS feed.
                    </Typography>
                    <Button  onClick={this.loadDataSetFromUSGS} >
                        Load Data
                    </Button>
                    <Divider className={ this.styles.divider} />
                    <Typography className={this.styles.title} color="textSecondary">
                        Top Earthquakes in the world
                    </Typography>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="products"
                            name="topearth"
                            className={"groupRadioProd"}
                            value={this.state.topdatarecords}
                            onChange={this.handleStateChangeRadioButton}
                            row
                        >
                            <FormControlLabel value="5" control={<Radio />} label="Top 5 big Earthquakes" />
                            <FormControlLabel value="10" control={<Radio />} label="Top 10 big Earthquakes" />
                            <FormControlLabel value="1" control={<Radio />} label="All Earthquakes" />
                        </RadioGroup>
                        <Typography className={this.styles.pos} color="textSecondary">
                            *Load data before picking an option.
                        </Typography>
                    </FormControl>
                </CardContent>
            </Card>
            <Divider className={ this.styles.divider} />
            <Card styles={this.styles.card}>
            </Card>
        </div>
        );
    }
}