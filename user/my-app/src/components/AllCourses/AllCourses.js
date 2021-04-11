import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImg from "../../asset/images/react.jpg";
import {Link} from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="allCoursesPage text-center" >
                    <Row>
                        <Col lg={6} md={12} sm={12} className="allCourseCardPage mb-3" >
                            <Row>
                                <Col lg={6} md={6} sm={12} >
                                    <img className="coursesSectionImg" src={courseImg} />
                                </Col>
                                <Col className="text-justify" lg={6} md={6} sm={12} >
                                    <h4 className="coursesSectionTitle" >Web Development</h4>
                                    <p className="coursesSectionDesc" >I design and develop static and dynamic web site as per you requierments as we belive "Web is world's next home"</p>
                                    <a href="#"  className="coursesSectionButton" >
                                        <Link className="courseDetailsButton" to="/courseDetails" > Details.... </Link>
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="allCourseCardPage mb-3" >
                            <Row>
                                <Col lg={6} md={6} sm={12} >
                                    <img className="coursesSectionImg" src={courseImg} />
                                </Col>
                                <Col className="text-justify" lg={6} md={6} sm={12} >
                                    <h4 className="coursesSectionTitle" >Web Development</h4>
                                    <p className="coursesSectionDesc" >I design and develop static and dynamic web site as per you requierments as we belive "Web is world's next home"</p>
                                    <a href="#"  className="coursesSectionButton" >
                                        <Link className="courseDetailsButton" to="/courseDetails" > Details.... </Link>
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="allCourseCardPage mb-3" >
                            <Row>
                                <Col lg={6} md={6} sm={12} >
                                    <img className="coursesSectionImg" src={courseImg} />
                                </Col>
                                <Col className="text-justify" lg={6} md={6} sm={12} >
                                    <h4 className="coursesSectionTitle" >Web Development</h4>
                                    <p className="coursesSectionDesc" >I design and develop static and dynamic web site as per you requierments as we belive "Web is world's next home"</p>
                                    <a href="#"  className="coursesSectionButton" >
                                        <Link className="courseDetailsButton" to="/courseDetails" > Details.... </Link>
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="allCourseCardPage mb-3" >
                            <Row>
                                <Col lg={6} md={6} sm={12} >
                                    <img className="coursesSectionImg" src={courseImg} />
                                </Col>
                                <Col className="text-justify" lg={6} md={6} sm={12} >
                                    <h4 className="coursesSectionTitle" >Web Development</h4>
                                    <p className="coursesSectionDesc" >I design and develop static and dynamic web site as per you requierments as we belive "Web is world's next home"</p>
                                    <a href="#"  className="coursesSectionButton" >
                                        <Link className="courseDetailsButton" to="/courseDetails" > Details.... </Link>
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="allCourseCardPage mb-3" >
                            <Row>
                                <Col lg={6} md={6} sm={12} >
                                    <img className="coursesSectionImg" src={courseImg} />
                                </Col>
                                <Col className="text-justify" lg={6} md={6} sm={12} >
                                    <h4 className="coursesSectionTitle" >Web Development</h4>
                                    <p className="coursesSectionDesc" >I design and develop static and dynamic web site as per you requierments as we belive "Web is world's next home"</p>
                                    <a href="#"  className="coursesSectionButton" >
                                        <Link className="courseDetailsButton" to="/courseDetails" > Details.... </Link>
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="allCourseCardPage mb-3" >
                            <Row>
                                <Col lg={6} md={6} sm={12} >
                                    <img className="coursesSectionImg" src={courseImg} />
                                </Col>
                                <Col className="text-justify" lg={6} md={6} sm={12} >
                                    <h4 className="coursesSectionTitle" >Web Development</h4>
                                    <p className="coursesSectionDesc" >I design and develop static and dynamic web site as per you requierments as we belive "Web is world's next home"</p>
                                    <a href="#"  className="coursesSectionButton" >
                                        <Link className="courseDetailsButton" to="/courseDetails" > Details.... </Link>
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;