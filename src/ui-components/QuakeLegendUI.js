/**
 * Created by Jaguar on 8/27/18.
 */
import React, { Component } from 'react';
import {Card,CardContent,Typography} from "@material-ui/core/";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class QuakeLegendUI extends Component {

    styles = theme => ({
        card: {
            minWidth: 275,
        },
        title: {
            fontSize: 12,
        },
        paragraphText :{
            fontSize: 12,
            textAlign: "left",
            alignLeft:true,
        }
    });

    render(){

        let id = 0;
        function createData(magnitude, intensity) {
            id += 1;
            return { id, magnitude, intensity };
        }

        const rows = [
            createData('1.0 - 3.0','Not felt.'),
            createData('3.0 - 3.9','Felt only by a few persons.'),
            createData('4.0 - 4.9','Felt by nearly everyone.'),
            createData('5.0 - 5.9','May cause damage to structures.'),
            createData('6.0 - 6.9','Damage considerable in structures.'),
            createData('7.0 and higher','Damage total.'),
        ];

        return(
            <Card styles={this.styles.card}>
                <CardContent>
                    <Typography className={this.styles.title} color="textSecondary">
                        Table of magnitude scales according with the USGS
                    </Typography>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Magnitude</TableCell>
                                    <TableCell>Intensity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell numeric>{row.magnitude}</TableCell>
                                            <TableCell numeric>{row.intensity}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                    <Typography className={this.styles.paragraphText} color="textSecondary">
                        Information taken from USGS Magnitude / Intensity Comparison page.
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}