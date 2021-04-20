import React, {Component, Fragment} from 'react';
import  {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";

class RecentProject extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        let err = "Opps ! Something Error...";
        RestGetClient.GetRequest(AppUrl.ProjectHome).then(result=>{
            this.setState({myData:result});
        }).catch(error=>{
            return err;
        })
    }


    render() {

        const myList = this.state.myData;
        const myViews = myList.map(myListData=>{
            return  <Col lg={4} md={6} sm={12} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top" src={myListData.project_font_img} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle" >{myListData.project_name}</Card.Title>
                                <Card.Text className="projectCardDecs" > {myListData.project_short_description} </Card.Text>
                                <Button> <Link className="linkButton" to={"/projectDetails/"+myListData.id+"/"+myListData.project_name} >Details</Link> </Button>
                            </Card.Body>
                        </Card>
                    </Col>

        })


        return (
            <Fragment>
                <Container className="text-center" >
                    <h1 className="serviceMainTitle" >Recent Project</h1>
                    <Row>
                        {myViews}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProject;