import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";

class PrivacyPolicySection extends Component {

    constructor() {
        super();
        this.state={
            PrivacyPolicyData:" "
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({PrivacyPolicyData:result[0]['privacy_policy']});
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="termsConditionSection text-justify" >
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div  className="termsConditionDec">
                                { ReactHtmlParser(this.state.PrivacyPolicyData) }
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyPolicySection;