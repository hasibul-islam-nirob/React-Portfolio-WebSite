import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutPageInformation extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-5" >
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="aboutPageInfoTitle" >Title 1</h1>
                            <hr/>
                            <p className="aboutPageInfoDesc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>

                        <Col lg={12} md={12} sm={12}>
                            <h1 className="aboutPageInfoTitle" >Title 2</h1>
                            <hr/>
                            <p className="aboutPageInfoDesc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>

                        <Col lg={12} md={12} sm={12}>
                            <h1 className="aboutPageInfoTitle" >Title 3</h1>
                            <hr/>
                            <p className="aboutPageInfoDesc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutPageInformation;