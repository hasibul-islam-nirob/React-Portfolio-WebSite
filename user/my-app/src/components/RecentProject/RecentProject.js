import React, {Component, Fragment} from 'react';
import  {Button, Card, Col, Container, Row} from "react-bootstrap";
import projectImg from "../../asset/images/project.jpg"
import {Link} from "react-router-dom";

class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" >
                    <h1 className="serviceMainTitle" >Recent Project</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={projectImg} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle" >Card Title</Card.Title>
                                    <Card.Text className="projectCardDecs" >
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button> <Link className="linkButton" to="/projectDetails" >Details</Link> </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={projectImg} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle" >Card Title</Card.Title>
                                    <Card.Text className="projectCardDecs" >
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button> <Link className="linkButton" to="/projectDetails" >Details</Link> </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={projectImg} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle" >Card Title</Card.Title>
                                    <Card.Text className="projectCardDecs" >
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button> <Link className="linkButton" to="/projectDetails" >Details</Link> </Button>
                                </Card.Body>
                            </Card>
                        </Col>



                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProject;