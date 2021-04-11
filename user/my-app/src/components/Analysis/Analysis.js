import React, {Component, Fragment} from 'react';
//import "../../asset/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";


class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            analysisData:[
                {Technology:'Java', Project:20},
                {Technology:'Python', Project:10},
                {Technology:'Php', Project:50},
                {Technology:'SQL', Project:45},
                {Technology:'C++', Project:85},
                {Technology:'JavaScript', Project:90},
                {Technology:'C#', Project:30},
                {Technology:'BootStrap', Project:95}
            ]
        }
    }

    render() {
        var blue ="rgba(0,115,230,0.8)";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="analysisMainTitle" >Technology Used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={100} height={300} data={this.state.analysisData} >
                                    <XAxis dataKey="Technology" />
                                    <Tooltip/>
                                    <Bar dataKey="Project" fill={blue} >

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12} >
                            <p className="text-justify analysisDescription" > To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;