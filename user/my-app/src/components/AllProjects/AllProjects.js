import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import projectImg from "../../asset/images/project.jpg";
import {Link} from "react-router-dom";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";

class AllProjects extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.AllProject).then(result=>{
            this.setState({myData:result});
        })
    }

    render() {

        const myList = this.state.myData;
        const myViews = myList.map(myListData=>{
            return  <Col lg={4} md={6} sm={12} className="p-2">
                        <Card className="allProjectsCard">
                            <Card.Img className="allProjectImg" variant="top" src={myListData.project_font_img} />
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
                <Container className="allProjectsTopMargin text-center" >
                    <Row>
                        {myViews}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;