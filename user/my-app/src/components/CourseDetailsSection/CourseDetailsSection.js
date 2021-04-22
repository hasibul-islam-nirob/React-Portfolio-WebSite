import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import projectImg from "../../asset/images/projectImg.jpg";
import {Link} from "react-router-dom";
import {BigPlayButton, Player} from "video-react";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class CourseDetailsSection extends Component {


    constructor(props) {
        super();
        this.state={
            courseID:props.id,
            sort_title      :" ",
            sort_des        :" ",
            small_img       :" ",
            long_title      :" ",
            long_des        :" ",
            get_knowlage    :" ",
            video_link      :" ",
            course_link     :" ",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        let id = this.state.courseID;
        RestGetClient.GetRequest(AppUrl.CourseDetails + id).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({
                    sort_title: result[0]['sort_title'],
                    sort_des: result[0]['sort_des'],
                    small_img: result[0]['small_img'],
                    long_title: result[0]['long_title'],
                    long_des: result[0]['long_des'],
                    get_knowlage: result[0]['get_knowlage'],
                    video_link: result[0]['video_link'],
                    course_link: result[0]['course_link'],
                    loading:false
                })
            }
        }).catch(error=>{
            this.setState({error:true, loading:false})
        })
    }


    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){
            return (
                <Fragment>
                    <Container className="projectDetailsSection text-justify" >
                        <h1 className="courseDetailsCourseName" >{ ReactHtmlParser(this.state.sort_title)}</h1>
                        <h1 className="courseDetailsCourseName" >{ ReactHtmlParser(this.state.long_title)}</h1>
                        <Row>
                            <Col lg={12} md={12} sm={12} >
                                <p className="courseDetailsTopText" > {this.state.long_des} </p>
                            </Col>

                            <Col lg={6} md={6} sm={12} >
                                <h1 className="courseDetailsOutLineTitle" >Course Out Line</h1>
                                <h4 className="projectDetailsSubTitle" > { ReactHtmlParser(this.state.sort_des)} </h4>

                                <div className="text-justify" >
                                    <ul>
                                        { ReactHtmlParser(this.state.get_knowlage)}
                                    </ul><br/>
                                </div>

                                <Button> <a className="linkButton" target="_blank" href={"//"+this.state.course_link} >Enroll Now </a> </Button>
                            </Col>

                            <Col lg={6} md={6} sm={12} >
                                <Player>
                                    <source src= {this.state.video_link} />
                                    <BigPlayButton position="center" />
                                </Player>
                            </Col>

                        </Row>
                    </Container>
                </Fragment>
            );

        }else if (this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default CourseDetailsSection;