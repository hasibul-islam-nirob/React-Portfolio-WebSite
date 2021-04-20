import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';


class AboutPageInformation extends Component {

    constructor() {
        super();
        this.state={
            aboutData:" "
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({aboutData:result[0]['about']});
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="pt-5" >
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="aboutPageInfoDesc" >
                                { ReactHtmlParser(this.state.aboutData) }
                             </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutPageInformation;