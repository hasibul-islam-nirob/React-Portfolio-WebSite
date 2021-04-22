import React, {Component, Fragment} from 'react';
import { Button,Col, Modal, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import {Player, BigPlayButton } from 'video-react';
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class Video extends Component {

    constructor() {
        super();
        this.state={
            show:false,
            videoDes:" ",
            videoUrl:" ",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.HomeVideo).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({
                    videoDes:result[0]['homePage_video_description'],
                    videoUrl:result[0]['homePage_video_url'],
                    loading:false
                });
            }

        }).catch(error=>{
            this.setState({error:true, loading:false})
        })
    }

    modalShow=()=>{ this.setState({show:true}); }
    modalHide=()=>{ this.setState({show:false}); }

    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){

            return (
                <Fragment>
                    <Container className="text-center" >
                        <Row>
                            <Col lg={12} md={12} sm={12} className="videoSectionCard" >
                                <div>
                                    <h2 className="videoTitle" >How I Do</h2>
                                    <p className="videoDesc" >
                                        { ReactHtmlParser(this.state.videoDes)}
                                    </p>
                                    <p> <FontAwesomeIcon onClick={this.modalShow} icon={faPlayCircle} className="videoPlayerCycle" /> </p>
                                </div>
                            </Col>
                        </Row>


                        <Modal size="lg" show={this.state.show} onHide={this.modalHide}>
                            <Modal.Body>
                                <Player>
                                    <source src={this.state.videoUrl} />
                                    <BigPlayButton position="center" />
                                </Player>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.modalHide}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </Container>

                </Fragment>
            );

        }else if (this.state.error==true){
            return <WentWrong/>
        }


    }
}

export default Video;