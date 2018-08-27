/**
 * Created by Jaguar on 8/24/18.
 */
import React, {Component} from 'react'
import MapUI from './MapUI';

export default class MapUIContainer extends Component {
    render(){
        return(
            <MapUI
                dataformap={this.props.dataformap}
                topFilter={this.props.topFilter}
            />
        );
    }
}