import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";

class TermsConditionSection extends Component {

    constructor() {
        super();
        this.state={
            TermsConditionData:" "
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({TermsConditionData:result[0]['terms_condition']});
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="termsConditionSection text-justify" >
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="termsConditionDec">
                                { ReactHtmlParser(this.state.TermsConditionData) }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TermsConditionSection;