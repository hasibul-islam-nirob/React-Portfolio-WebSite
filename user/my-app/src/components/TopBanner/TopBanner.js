import React, {Component, Fragment} from 'react';

import {Col, Container, Row,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from 'axios';
import AppUrl from "../../RestAPI/AppUrl";
import RestGetClient from "../../RestAPI/RestGetClient";

class TopBanner extends Component {

    constructor() {
        super();
        this.state={
            title:" ",
            subTitle:" "
        }
    }

    componentDidMount() {
        let err = "Opps! Something Went Wrong....!";
        RestGetClient.GetRequest(AppUrl.HomeTitle).then(result=>{
            this.setState({title:result[0]['homePage_title'], subTitle:result[0]['homePage_subtitle']});
        }).catch(error=>{
            this.setState({title:err, subTitle:err});

        })

    }

    render() {
        return (
            <div>
                <Fragment>
                    <Container fluid={true} className="topFixedBanner p-0">
                        <div className="topBannerOverlay" >
                            <Container className="topContent">
                                <Row>
                                    <Col className="text-center">
                                        <h1 className="topTittle" > {this.state.title} </h1>
                                        <h3 className="topSubTittle">{this.state.subTitle}</h3>
                                        <Button variant="primary"><Link className="linkButton" to="/contact"> Contact Me</Link></Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </Fragment>
            </div>
        );
    }
}

export default TopBanner;