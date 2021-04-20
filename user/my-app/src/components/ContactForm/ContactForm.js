import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";

class ContactForm extends Component {
    constructor() {
        super();
        this.state={
            fAddress:"",
            fMail:" ",
            fMobile:" ",
        }
    }

    componentDidMount() {
        let err = "Opps! Something Went Wrong....!";
        RestGetClient.GetRequest(AppUrl.Footer).then(result=>{
            this.setState({fAddress:  result[0]['footer_address'] ,fMail: result[0]['footer_email'] ,fMobile: result[0]['footer_mobile'] });
        })
    }



    onFormControlSubmit(){
        let name  = document.getElementById("name").value;
        let email  = document.getElementById("email").value;
        let msg  = document.getElementById("msg").value;

        let jsonObjectData = {name:name,email:email,msg:msg }
        let jsonListData = JSON.stringify(jsonObjectData);

        RestGetClient.postRequest(AppUrl.Send, jsonListData).then(result=>{
            alert("Success");
        }).catch(error=>{
            alert("Error");
        })
    }

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
                                    <Form.Control id="name" type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="contactFormSubTitle" >Email Address</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Your Email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="contactFormSubTitle" >Massage</Form.Label>
                                    <Form.Control id="msg" as="textarea" rows={4} />
                                </Form.Group>

                                <Button onClick={this.onFormControlSubmit} variant="primary">
                                    Send
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="contactFormTitle" >Discussion Any Time</h1>
                            <p className="contactFormDesc" ><FontAwesomeIcon icon={faHome} /> {this.state.fAddress}</p>
                            <p className="contactFormDesc" ><FontAwesomeIcon icon={faEnvelope} /> {this.state.fMail}</p>
                            <p className="contactFormDesc" ><FontAwesomeIcon icon={faPhone} /> {this.state.fMobile}</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactForm;