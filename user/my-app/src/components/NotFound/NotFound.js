import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <Container className="notFoundSection text-center" >
                    <Row>
                        <Col>
                            <h1 className="notFoundTitle" >404 | Not Found</h1>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NotFound;