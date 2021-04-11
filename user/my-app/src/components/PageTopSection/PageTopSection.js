import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageTopSection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="pageTopFixedBanner p-0" >
                    <div className="pageTopBannerOverlay" >
                        <Container className="text-center" >
                            <Row>
                                <Col lg={12} md={12} sm={12} >
                                    <h1 className="pageTopContent" > {this.props.pageTopTitle} </h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTopSection;