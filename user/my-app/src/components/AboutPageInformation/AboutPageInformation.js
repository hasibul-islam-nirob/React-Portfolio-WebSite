import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";


class AboutPageInformation extends Component {

    constructor() {
        super();
        this.state={
            aboutData:" ",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Information).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({aboutData:result[0]['about'], loading:false});
            }
        }).catch(error=>{
            this.setState({error:true, loading:false})
        })
    }

    render() {

        if (this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){

            return (
                <Fragment>
                    <Container className="pt-5" >
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="aboutPageInfoDesc" >
                                    { ReactHtmlParser(this.state.aboutData) }
                                </div>
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

export default AboutPageInformation;