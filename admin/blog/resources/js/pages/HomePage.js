import React, {Component,Fragment} from 'react';
import Menu from "../components/Menu";
import {Card, Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import LoadingDiv from "../components/LoadingDiv";
import WentWrong from "../components/WentWrong";

class HomePage extends Component {

    constructor() {
        super();
        this.state={
            allData: [],
            isLoading:true,
            isError:false
        }
    }

    componentDidMount() {
        Axios.get('/countDataSummery').then((response)=>{
            if (response.status==200){
                this.setState({allData:response.data,isLoading:false });
            }else {
                this.setState({isLoading:false, isError:true });
            }
        }).catch((error)=>{
            this.setState({isLoading:false, isError:true });
        })
    }

    render() {
        if (this.state.isLoading==true && this.state.isError==false){
            return <LoadingDiv/>
        }else if (this.state.isLoading==false && this.state.isError==true){
            return <WentWrong/>
        }else {
            const data = this.state.allData;
            return (
                <Fragment>
                    <Menu title="Home">
                        <Container fluid={true}>
                            <Row>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['Contact']}</h5>
                                            <h5 className="des-text">Contact Request</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['Course']}</h5>
                                            <h5 className="des-text">Total Courses</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['Project']}</h5>
                                            <h5 className="des-text">Total Projects</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['clientReview']}</h5>
                                            <h5 className="des-text">Total Review</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['Services']}</h5>
                                            <h5 className="des-text">Total Services</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Menu>
                </Fragment>
            );
        }
    }
}

export default HomePage;
