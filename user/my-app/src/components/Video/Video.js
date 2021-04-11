import React, {Component, Fragment} from 'react';
import { Button,Col, Modal, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import {Player, BigPlayButton } from 'video-react';

class Video extends Component {

    constructor() {
        super();
        this.state={
            show:false
        }
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
                                <p className="videoDesc" >First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to
                                    the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide
                                    6 month free bug fixing service for corresponding project.</p>
                                <p> <FontAwesomeIcon onClick={this.modalShow} icon={faPlayCircle} className="videoPlayerCycle" /> </p>
                            </div>
                        </Col>
                    </Row>


                    <Modal size="lg" show={this.state.show} onHide={this.modalHide}>
                        <Modal.Body>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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