import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";

class Summary extends Component {

    constructor() {
        super();
        this.state={
            totalProject:"50",
            totalClient:"30"
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.HomeCountArea).then(result=>{
            this.setState({totalProject:result[0]['homePage_total_project'], totalClient:result[0]['homePage_total_client']});
        })
    }

    render() {

        return (
            <Fragment>
                <Container fluid={true} className="summeryFixedBanner summarySection p-0">
                    <div className="summeryBannerOverlay" >
                        <Container className="text-center pb-3 ">
                            <Row>
                                <Col lg={8} md={6} sm={12} >
                                    <Row  className="countSection"  >
                                        <Col>
                                            <h1 className="countNumber" >
                                                <CountUp start={0} end={this.state.totalProject}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall >
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle" >Total Project</h4>
                                            <hr className="bg-white w-25 " />
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber" >
                                                <CountUp start={0} end={this.state.totalClient}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall >
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle" >Total Clients</h4>
                                            <hr className="bg-white w-25 " />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12} >
                                    <Card className="workingCardSection" >
                                        <Card.Body>
                                            <Card.Title className="cardTitle" >How I Do !</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify" ><FontAwesomeIcon className="cardIconColor" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p className="cardSubTitle text-justify" ><FontAwesomeIcon className="cardIconColor" icon={faCheckCircle} /> System Analysis</p>
                                                <p className="cardSubTitle text-justify" ><FontAwesomeIcon className="cardIconColor" icon={faCheckCircle} /> Coding Testing</p>
                                                <p className="cardSubTitle text-justify" ><FontAwesomeIcon className="cardIconColor" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;