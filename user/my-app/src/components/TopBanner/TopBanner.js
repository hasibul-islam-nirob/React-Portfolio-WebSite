import React, {Component, Fragment} from 'react';

import {Col, Container, Row,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class TopBanner extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Container fluid={true} className="topFixedBanner p-0">
                        <div className="topBannerOverlay" >
                            <Container className="topContent">
                                <Row>
                                    <Col className="text-center">
                                        <h1 className="topTittle" > Hasibul Islam Nirob </h1>
                                        <h3 className="topSubTittle">Full Stack Web Developer</h3>
                                        <Button variant="primary"><Link className="linkButton" to="/contact"> Contact Me</Link></Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </Fragment>
            </div>
        );
    }
}

export default TopBanner;