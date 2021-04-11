import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class TermsConditionSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="termsConditionSection text-justify" >
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h2 className="termsConditionTitle" >Lorem Ipsum is simply dummy text</h2>
                            <p className="termsConditionDec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <h2 className="termsConditionTitle" >Lorem Ipsum is simply dummy text</h2>
                            <p className="termsConditionDec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <h2 className="termsConditionTitle" >Lorem Ipsum is simply dummy text</h2>
                            <p className="termsConditionDec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TermsConditionSection;