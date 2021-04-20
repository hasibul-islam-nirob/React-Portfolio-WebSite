import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";

class ClientReview extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.ClientReview).then(result=>{
            this.setState({myData:result});
        })
    }

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


        const myList = this.state.myData;
        const myViews = myList.map(myListData=>{
            return <div>
                    <Row className="text-center justify-content-center" >
                        <Col lg={6} md={6} sm={12} >
                            <img className="clientReviewImg" src={myListData.client_img} />
                            <h1 className="clientReviewTitle" > {myListData.client_name} </h1>
                            <p className="clientReviewDesc" > {myListData.client_description} </p>
                        </Col>
                    </Row>
                </div>
        })

        return (
            <Fragment>
                <Container className="text-center" >
                    <h1 className="serviceMainTitle" >Client Reviews</h1>
                    <Slider {...settings} >
                        {myViews}
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;