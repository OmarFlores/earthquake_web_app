/**
 * Created by Jaguar on 8/28/18.
 */
import React, {Component} from 'react';

export default class LineChartCustomTooltip extends Component{
    styles = {
        tooltip:
            {
                border:"solid",
                borderWidth:"1px",
                borderColor:"grey",
                backgroundColor:"white",
                textAlign:"left",
                color:"black",
                fontSize:"12px",
                width:"30"
            }
    };
    render() {

        const { active, payload } = this.props;
        console.log(payload);
        if (active && payload) {
            const { label } = this.props;
            return (
                <div className="custom-tooltip" style={this.styles.tooltip}>
                    <p className="label" >{`${label}`}</p>
                    <p className="intro">{"Magnitude: " +`${payload[0].value}`}</p>
                    <p className="desc">{"Place: " +`${payload[0].payload.place}`}</p>
                </div>
            );
        }

        return null;
        }
}
