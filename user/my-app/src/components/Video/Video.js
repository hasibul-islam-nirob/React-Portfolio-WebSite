import React, {Component, Fragment} from 'react';
import { Button,Col, Modal, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import {Player, BigPlayButton } from 'video-react';
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
class Video extends Component {

    constructor() {
        super();
        this.state={
            show:false,
            videoDes:" ",
            videoUrl:" "
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.HomeVideo).then(result=>{
            this.setState({ videoDes:result[0]['homePage_video_description'], videoUrl:result[0]['homePage_video_url']});
        })
    }

    modalShow=()=>{ this.setState({show:true}); }
    modalHide=()=>{ this.setState({show:false}); }

    render() {
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
    }
}

export default Video;