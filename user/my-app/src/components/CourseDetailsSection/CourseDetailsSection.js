import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import projectImg from "../../asset/images/projectImg.jpg";
import {Link} from "react-router-dom";
import {BigPlayButton, Player} from "video-react";

class CourseDetailsSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="projectDetailsSection text-justify" >
                    <h1 className="courseDetailsCourseName" >Course Name</h1>
                    <Row>
                        <Col lg={12} md={12} sm={12} >
                            <p className="courseDetailsTopText" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        </Col>

                        <Col lg={6} md={6} sm={12} >
                            <h1 className="courseDetailsOutLineTitle" >Course Out Line</h1>
                            <h4 className="projectDetailsSubTitle" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</h4>

                           <div>
                               <h1 className="courseDetailsTitle" >Lesson 1</h1>
                               <ul>
                                   <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                   <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                   <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                               </ul><br/>
                           </div>

                            <div>
                                <h1 className="courseDetailsTitle" >Lesson 2</h1>
                                <ul>
                                    <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                    <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                    <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                </ul><br/>
                            </div>

                            <div>
                                <h1 className="courseDetailsTitle" >Lesson 3</h1>
                                <ul>
                                    <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                    <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                    <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                </ul><br/>
                            </div>


                            <Button> <Link className="linkButton" to=" " >Enroll Now </Link> </Button>
                        </Col>

                        <Col lg={6} md={6} sm={12} >
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetailsSection;