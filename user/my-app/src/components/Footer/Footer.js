import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Footer extends Component {

    constructor() {
        super();
        this.state={
            fAddress:"",
            fMail:" ",
            fMobile:" ",
            fFB:" ",
            fLin:" ",
            fGit:"",
            fYt:" ",
            fCredit:" ",
            addressClass:"d-none",
            error:false
        }
    }

    componentDidMount() {

        RestGetClient.GetRequest(AppUrl.Footer).then(result=>{
            if (result==null){
                this.setState({error:true})
            }else{
                this.setState({
                    fAddress:  result[0]['footer_address'] ,
                    fMail: result[0]['footer_email'] ,
                    fMobile: result[0]['footer_mobile'] ,
                    fFB: result[0]['footer_fb_link'] ,
                    fLin:  result[0]['footer_lin_link'] ,
                    fGit: result[0]['footer_ghub_link'] ,
                    fYt: result[0]['footer_youtube_link'] ,
                    fCredit: result[0]['footer_credit'] ,
                    loading:false,
                    addressClass:"d-block p-3 text-justify "
                });
            }

        }).catch(error=>{
            this.setState({error:true})
        })
    }

    render() {

        if (this.state.error==true){
            return <WentWrong/>
        }else{
            return (
                <Fragment>
                    <Container fluid={true} className="footerSection text-center p-5 " >
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-3 text-justify " >
                                <h1 className="footerMainTitle" >Follow</h1>
                                <a className="footerDescLink" target="_blank" href={"//"+this.state.fFB}> <FontAwesomeIcon icon={faFacebook} /> FaceBook</a> <br/>
                                <a className="footerDescLink" target="_blank" href={"//"+this.state.fLin}> <FontAwesomeIcon icon={faLinkedin} /> Linkedin</a><br/>
                                <a className="footerDescLink" target="_blank" href={"//"+this.state.fGit}> <FontAwesomeIcon icon={faGithub} /> GitHub</a>
                            </Col>

                            <Col lg={3} md={6} sm={12} className={this.state.addressClass} >
                                <h1 className="footerMainTitle" >Address</h1>
                                <p className="footerAddressDesc" ><FontAwesomeIcon icon={faHome} /> {this.state.fAddress} </p>
                                <p className="footerAddressDesc" ><FontAwesomeIcon icon={faEnvelope} /> {this.state.fMail}</p>
                                <p className="footerAddressDesc" ><FontAwesomeIcon icon={faPhone} /> {this.state.fMobile}</p>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-3 text-justify " >
                                <h1 className="footerMainTitle" >Information</h1>
                                <Link className="footerDescLink" to="/about"> About Me</Link><br/>
                                <Link className="footerDescLink" to=""> My Resume</Link><br/>
                                <Link className="footerDescLink" to="/contact"> Contact Me</Link>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-3 text-justify " >
                                <h1 className="footerMainTitle" >Legal</h1>
                                <Link className="footerDescLink" to="/privacyPolicy"> Privacy Policy </Link><br/>
                                <Link className="footerDescLink" to="/refund"> Refund Policy </Link><br/>
                                <Link className="footerDescLink" to="/termsCondition"> Terms & Condition </Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true} className="text-center" >
                        <Row className="bg-dark" >
                            <Col lg={12} md={12} sm={12} >
                                <p className="copyRightTitle" > {this.state.fCredit} </p>
                            </Col>
                        </Row>
                    </Container>

                </Fragment>
            );
        }


    }
}

export default Footer;