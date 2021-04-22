import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import projectImg from "../../asset/images/project.jpg";
import {Link} from "react-router-dom";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AllProjects extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.AllProject).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({
                    myData:result,
                    loading:false
                });
            }
        }).catch(error=>{
            this.setState({error:true,loading:false })
        })
    }

    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){

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

        }else if (this.state.error==true){
            return <WentWrong/>
        }


    }
}

export default AllProjects;