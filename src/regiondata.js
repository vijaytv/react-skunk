import React  from 'react';
import {PageHeader, Grid, Row, Col, Panel } from 'react-bootstrap';

import { ComposedChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Bar, Tooltip } from 'recharts';
import {GenerateData} from  './generator';

class  RegionData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      	return <Row className="show-grid">
              <Col xs={12} md={2} lg={2}>
                  <h2 className='section-header'>
                      {this.props.region}
                  </h2>
                    <Panel header="Database">
                      <LineChart width={325} height={100} data={this.props.data['Database']}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="2 2" />
                        <Tooltip />
                        <Line type='monotone' dataKey='Average' stroke='#98AFC7' strokeWidth={2} />
                        <XAxis dataKey="time" tick={{stroke: '#cfcfcf', strokeWidth: 1}} />
                      </LineChart>
                      <hr/>
                      <div className="sm-text">Alerts</div>
                      <div className={`lg-text ${this.props.alerts.Database.type}`}>
                        {this.props.alerts.Database.value}
                      </div>
                    </Panel>
                    <Panel header="Network">
                      <ComposedChart width={325} height={100} data={this.props.data['Network']}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Average" fill="#98AFC7" />
                        <Line type='monotone' dataKey='Volume' stroke='#ff7300'/>
                        <XAxis dataKey="time" tick={{stroke: '#cfcfcf', strokeWidth: 1}} />
                      </ComposedChart>
                      <hr/>
                      <div className="sm-text">Alerts</div>
                      <div className={`lg-text ${this.props.alerts.Network.type}`}>
                        {this.props.alerts.Network.value}
                      </div>
                    </Panel>
                    <Panel header="CPU">
                      <LineChart width={325} height={100} data={this.props.data['CPU']}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <Line type='monotone' dataKey='Average' stroke='#98AFC7' strokeWidth={2} />
                        <XAxis dataKey="time" tick={{stroke: '#cfcfcf', strokeWidth: 1}} />
                      </LineChart>
                      <hr/>
                      <div className="sm-text">Alerts</div>
                      <div className={`lg-text ${this.props.alerts.CPU.type}`}>
                        {this.props.alerts.CPU.value}
                      </div>
                    </Panel>
                    <Panel header="Web">
                      <LineChart width={325} height={100} data={this.props.data['Web']}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <Line type='monotone' dataKey='Average' stroke='#98AFC7' strokeWidth={2} />
                      <XAxis dataKey="time" tick={{stroke: '#cfcfcf', strokeWidth: 1}} />
                   </LineChart>
                   <hr/>
                   <div className="sm-text">Alerts</div>
                   <div className={`lg-text ${this.props.alerts.Web.type}`}>
                     {this.props.alerts.Web.value}
                   </div>
                  </Panel>
              </Col>
            </Row>
    }
}
export default RegionData;
