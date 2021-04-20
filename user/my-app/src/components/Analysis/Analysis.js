import React, {Component, Fragment} from 'react';
//import "../../asset/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            analysisData:[],
            myData:" "
        }

    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({analysisData:result});
        })

        RestGetClient.GetRequest(AppUrl.HomeTechDes).then(result=>{
            this.setState({myData:result[0]['homePage_tech_text']});
        })
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
                            <p className="text-justify analysisDescription" >
                                {ReactHtmlParser(this.state.myData)}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;