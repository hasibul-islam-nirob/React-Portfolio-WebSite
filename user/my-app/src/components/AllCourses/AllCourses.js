import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImg from "../../asset/images/react.jpg";
import {Link} from "react-router-dom";
import RestGetClient from "../../RestAPI/RestGetClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AllCourses extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestGetClient.GetRequest(AppUrl.AllCourse).then(result=>{
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
                return   <Col lg={6} md={12} sm={12} className="allCourseCardPage mb-3" >
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <img className="coursesSectionImg" src={myListData.small_img} />
                        </Col>
                        <Col className="text-justify" lg={6} md={6} sm={12} >
                            <h4 className="coursesSectionTitle" >{myListData.sort_title}</h4>
                            <p className="coursesSectionDesc" >{myListData.sort_des}</p>
                            <a href="#"  className="coursesSectionButton" >
                                <Link className="courseDetailsButton" to={"/courseDetails/"+myListData.id+"/"+myListData.sort_title} > Details.... </Link>
                            </a>
                        </Col>
                    </Row>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="allCoursesPage text-center" >
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

export default AllCourses;