import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import myImg from "../../asset/images/nirob.jpg";

class ClientReview extends Component {
    render() {

        var settings = {
            vertical:true,
            verticalSwiping: true,
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };




        return (
            <Fragment>
                <Container className="text-center" >
                    <h1 className="serviceMainTitle" >Client Reviews</h1>
                    <Slider {...settings} >

                        <div>
                            <Row className="text-center justify-content-center" >
                                <Col lg={6} md={6} sm={12} >
                                    <img className="clientReviewImg" src={myImg} />
                                    <h1 className="clientReviewTitle" >Hasibul Islam Nirob</h1>
                                    <p className="clientReviewDesc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center" >
                                <Col lg={6} md={6} sm={12} >
                                    <img className="clientReviewImg" src={myImg} />
                                    <h1 className="clientReviewTitle" >Hasibul Islam Nirob</h1>
                                    <p className="clientReviewDesc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center " >
                                <Col lg={6} md={6} sm={12}  >
                                    <img className="clientReviewImg" src={myImg} />
                                    <h1 className="clientReviewTitle" >Hasibul Islam Nirob</h1>
                                    <p className="clientReviewDesc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center" >
                                <Col lg={6} md={6} sm={12} >
                                    <img className="clientReviewImg" src={myImg} />
                                    <h1 className="clientReviewTitle" >Hasibul Islam Nirob</h1>
                                    <p className="clientReviewDesc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;