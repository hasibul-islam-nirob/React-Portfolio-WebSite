import React, {Component, Fragment} from 'react';
import  {Col, Container, Row} from "react-bootstrap";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Services extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.Services).then(result=>{
            if (result==null){
                this.setState({error:true, loading:false})
            }else{
                this.setState({
                    myData:result,
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
                    <Container className="text-center" >
                        <h1 className="serviceMainTitle" >My Services</h1>
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

export default Services;