import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class TermsConditionSection extends Component {

    constructor() {
        super();
        this.state={
            TermsConditionData:" ",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Information).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({
                    TermsConditionData:result[0]['terms_condition'],
                    loading:false
                });
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
                    <Container className="termsConditionSection text-justify" >
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="termsConditionDec">
                                    { ReactHtmlParser(this.state.TermsConditionData) }
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

export default TermsConditionSection;