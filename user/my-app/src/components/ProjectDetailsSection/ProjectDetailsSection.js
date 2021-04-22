import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ProjectDetailsSection extends Component {

    constructor(props) {
        super();
        this.state={
            myProjectID:props.id,
            project_font_img : "",
            project_big_img : "",
            project_name : "",
            project_short_description : "",
            project_features : "",
            project_live_preview : "",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        let id = this.state.myProjectID;
        RestGetClient.GetRequest(AppUrl.ProjectDetails + id).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({
                    project_name:result[0]['project_name'],
                    project_short_description:result[0]['project_short_description'],
                    project_big_img:result[0]['project_big_img'],
                    project_features:result[0]['project_features'],
                    project_live_preview:result[0]['project_live_preview'],
                    loading:false
                })
            }

        }).catch(error=>{
            this.setState({error:true, loading:false})
        })
    }

    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false) {

            return (
                <Fragment>
                    <Container className="projectDetailsSection text-justify" >
                        <Row>

                            <Col lg={6} md={6} sm={12} >
                                <img className="projectDetailsIMG" src={this.state.project_big_img} />
                            </Col>

                            <Col lg={6} md={6} sm={12} >
                                <h1 className="projectDetailsTitle" >{this.state.project_name}</h1>
                                <h4 className="projectDetailsSubTitle" > { ReactHtmlParser(this.state.project_short_description)}</h4>

                                <ul>
                                    <li className="projectDetailsDec" > { ReactHtmlParser(this.state.project_features)} </li>

                                </ul><br/>

                                <Button> <a className="linkButton" target="_blank" href={"//"+this.state.project_live_preview} > Live Preview </a> </Button>

                            </Col>

                        </Row>
                    </Container>
                </Fragment>
            );

        }else if (this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default ProjectDetailsSection;