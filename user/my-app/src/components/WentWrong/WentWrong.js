import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import wrong from "../../asset/images/wrong.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" >
                    <Row>
                        <Col className="m-5 " >
                            <span className="wentWrong">
                                <h2 className="wentWrongH2"><img className="wentWrongImg" src={wrong} />Something Went Wrong......!!</h2>
                            </span>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;