import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LoadingImg from "../../asset/images/LoadingImg.svg";

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" >
                    <Row>
                        <Col className="m-5 " >
                            <img className="LoadingSVG" src={LoadingImg} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;