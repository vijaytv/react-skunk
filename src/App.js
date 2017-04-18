import React  from 'react';
import {PageHeader, Grid, Row, Col, Panel } from 'react-bootstrap';

import { ComposedChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Bar, Tooltip } from 'recharts';
import { GenerateData, GenerateAlerts } from  './generator';
import RegionData from './regiondata';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                na: GenerateData(),
                emea: GenerateData(),
                alerts: {
                    na: GenerateAlerts(),
                    emea: GenerateAlerts()
                }
        };
    }
    render () {
  	return (
        <div className="container">
            <PageHeader className='page-header'>Skunkworks Dashboard</PageHeader>
            <Grid>
                <RegionData region={"North America"} data={this.state.na} alerts={this.state.alerts.na}>
                </RegionData>
                <RegionData region={"EMEA"} data={this.state.emea} alerts={this.state.alerts.emea}>
                </RegionData>
            </Grid>

      </div>
    );
  }
}

export default App;
