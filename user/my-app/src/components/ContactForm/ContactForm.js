import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactForm extends Component {
    render() {
        return (
            <Fragment>
                <Container className="contactFormSection" >
                    <Row>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="contactFormTitle" >Quick Contact</h1>

                            <Form>
                                <Form.Group>
                                    <Form.Label className="contactFormSubTitle" >Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="contactFormSubTitle" >Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="contactFormSubTitle" >Massage</Form.Label>
                                    <Form.Control  as="textarea" rows={4} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="contactFormTitle" >Discussion Any Time</h1>
                            <p className="contactFormDesc" ><FontAwesomeIcon icon={faHome} /> 177 Tejkuni Para, Tejgaon. Dhaka-1215</p>
                            <p className="contactFormDesc" ><FontAwesomeIcon icon={faEnvelope} /> hasibolislamnirob@gmail.com</p>
                            <p className="contactFormDesc" ><FontAwesomeIcon icon={faPhone} /> +8801819979441</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactForm;