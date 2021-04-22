import React, {Component, Fragment} from 'react';

import {Col, Container, Row,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from 'axios';
import AppUrl from "../../RestAPI/AppUrl";
import RestGetClient from "../../RestAPI/RestGetClient";
import WentWrong from "../WentWrong/WentWrong";

class TopBanner extends Component {

    constructor() {
        super();
        this.state={
            title:" ",
            subTitle:" ",
            error:false
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.HomeTitle).then(result=>{
            if (result==null){
                this.setState({error:true})
            }else{
                this.setState({
                    title:result[0]['homePage_title'],
                    subTitle:result[0]['homePage_subtitle']
                });
            }
        }).catch(error=>{
            this.setState({error:true})
        })

    }

    render() {
        if(this.state.error==false){
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
        }else if (this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default TopBanner;