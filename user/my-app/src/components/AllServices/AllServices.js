import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";

class AllServices extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Services).then(result=>{
            this.setState({myData:result});
        })
    }

    render() {

        const myList = this.state.myData;
        const myViews = myList.map(myListData=>{
            return <Col lg={4} md={6} sm={12}  >
                <div className="serviceCard text-center" >
                    <img src={myListData.service_img} />
                    <h2 className="serviceName" > {myListData.service_title} </h2>
                    <p className="serviceDescription" >{myListData.service_description}</p>
                </div>
            </Col>
        });





        return (
            <Fragment>
                <Container className=" allServicesSection text-center" >
                    <Row>
                        {myViews}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllServices;