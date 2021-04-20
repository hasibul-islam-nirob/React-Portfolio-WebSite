import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";

class RefundPolicy extends Component {

    constructor() {
        super();
        this.state={
            RefundPolicyData:" "
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({RefundPolicyData:result[0]['refund_policy']});
        })
    }


    render() {
        return (
            <Fragment>
                <Container className="refundPolicySection text-justify" >
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <ul className="refundPolicyList">
                                <div>
                                    { ReactHtmlParser(this.state.RefundPolicyData) }
                                </div>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundPolicy;