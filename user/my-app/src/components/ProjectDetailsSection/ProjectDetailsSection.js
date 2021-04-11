import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import projectImg from "../../asset/images/projectImg.jpg";
import {Link} from "react-router-dom";
class ProjectDetailsSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="projectDetailsSection text-justify" >
                    <Row>

                        <Col lg={6} md={6} sm={12} >
                            <img className="projectDetailsIMG" src={projectImg} />
                        </Col>

                        <Col lg={6} md={6} sm={12} >
                            <h1 className="projectDetailsTitle" >Project Name</h1>
                            <h4 className="projectDetailsSubTitle" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</h4>

                            <ul>
                                <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                <li className="projectDetailsDec" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                            </ul><br/>

                            <Button> <Link className="linkButton" to=" " > Live Preview </Link> </Button>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetailsSection;