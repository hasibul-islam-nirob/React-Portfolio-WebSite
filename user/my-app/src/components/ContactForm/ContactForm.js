import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faPhone,faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
import Toaster from "../Toaster/Toaster";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            fAddress:"",
            fMail:" ",
            fMobile:" ",
            buttonName:"Send",
            nameEr:"",
            emailEr:"",
            msgEr:"",
            loading:true,
            error:false,

            errorIconName:"contactError d-none",
            errorIconEmail:"contactError d-none",
        }
    };

    componentDidMount() {

        RestGetClient.GetRequest(AppUrl.Footer).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({
                    fAddress:  result[0]['footer_address'] ,
                    fMail: result[0]['footer_email'] ,
                    fMobile: result[0]['footer_mobile'] ,
                    loading:false
                });
            }

        }).catch(error=>{
            this.setState({error:true, loading:false})
        })
    }


    onFormFormat=()=>{
        let nameVal  = document.getElementById("name").value;
        let emailVal  = document.getElementById("email").value;

        if (nameVal.length > 0){
            let nameValidation=/^([a-zA-Z ]){2,20}$/;
            if(!nameValidation.test(nameVal)){
                this.setState({nameEr:"Name Isn't Valid", errorIconName:"contactError"});
            }else{
                this.setState({nameEr:" ", errorIconName:"contactError d-none"});
            }
        }
        if(emailVal.length > 0){
            let mailValidation=/\S+@\S+\.\S+/;
            if(!mailValidation.test(emailVal)){
                this.setState({emailEr:"Mail Isn't Valid", errorIconEmail:"contactError"});
            }else{
                this.setState({emailEr:" ",  errorIconEmail:"contactError d-none"});
            }
        }

    }


    onFormControlSubmit=()=>{
        let nameVal  = document.getElementById("name").value;
        let emailVal  = document.getElementById("email").value;
        let msgVal  = document.getElementById("msg").value;

        let jsonObjectData = {name:nameVal,email:emailVal,msg:msgVal }
        let jsonListData = JSON.stringify(jsonObjectData);

        if (nameVal.length==0 || emailVal.length==0 || msgVal.length==0){
            toast.error('Field Should Not Be Empty ',{position: toast.POSITION.TOP_CENTER})
        } else{

            RestGetClient.postRequest(AppUrl.Send, jsonListData).then(result=>{
                toast.success('Massage Send Successful ',{position: toast.POSITION.TOP_CENTER})

            }).catch(error=>{
                toast.error('Massage Send Fail ',{position: toast.POSITION.TOP_CENTER})

            })

        }

    }



    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){

            return (
                <Fragment>
                    <Container className="contactFormSection" >
                        <Row>

                            <Col lg={6} md={6} sm={12}>
                                <h1 className="contactFormTitle" >Quick Contact</h1>

                                <Form>
                                    <Form.Group>
                                        <Form.Label className="contactFormSubTitle" >Your Name</Form.Label>
                                        <Form.Control onChange={this.onFormFormat} id="name" type="text" placeholder="Your Name" />
                                        <p className="errorIcon" > <FontAwesomeIcon className={this.state.errorIconName} icon={faExclamationCircle}/>  {this.state.nameEr}</p>



                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="contactFormSubTitle" >Email Address</Form.Label>
                                        <Form.Control onChange={this.onFormFormat} id="email" type="email" placeholder="Your Email" />
                                        <p className="errorIcon" ><FontAwesomeIcon className={this.state.errorIconEmail} icon={faExclamationCircle}/>  {this.state.emailEr}</p>

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="contactFormSubTitle" >Massage</Form.Label>
                                        <Form.Control id="msg" as="textarea" rows={4} />
                                        <p className="errorIcon" >{this.state.msg}</p>
                                    </Form.Group>

                                    <Button id="submitButton" onClick={this.onFormControlSubmit} variant="primary">Send</Button>
                                </Form>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h1 className="contactFormTitle" >Discussion Any Time</h1>
                                <p className="contactFormDesc" ><FontAwesomeIcon icon={faHome} /> {this.state.fAddress}</p>
                                <p className="contactFormDesc" ><FontAwesomeIcon icon={faEnvelope} /> {this.state.fMail}</p>
                                <p className="contactFormDesc" ><FontAwesomeIcon icon={faPhone} /> {this.state.fMobile}</p>
                            </Col>


                            <Toaster/>

                        </Row>
                    </Container>
                </Fragment>
            );

        }else if (this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default ContactForm;