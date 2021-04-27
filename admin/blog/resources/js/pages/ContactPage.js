import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Card, Col, Container, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from "axios";
import LoadingDiv from "../components/LoadingDiv";
import WentWrong from "../components/WentWrong";

class ContactPage extends Component {

    constructor() {
        super();
        this.state= {
            contactData: [],
            isLoading:true,
            isError:false
        }
    }

    componentDidMount() {
        Axios.get('/getAll').then((response)=>{
            if (response.status==200){
                this.setState({contactData:response.data,isLoading:false });
            }else{
                this.setState({isLoading:false, isError:true });
            }
        }).catch((error)=>{
            this.setState({isLoading:false, isError:true });
        })
    }

    render() {
        const allData = this.state.contactData;
        const columns = [
            {dataField:'id', text:'Id'},
            {dataField:'person_name', text:'Name'},
            {dataField:'person_email', text:'Email'},
            {dataField:'person_massage', text:'Massage'},
            {dataField:'msg_time', text:'Date & Time'}
        ];

        if (this.state.isLoading==true && this.state.isError==false){
            return <LoadingDiv/>
        }else if (this.state.isLoading==false && this.state.isError==true){
            return <WentWrong/>
        }else{
            return (
                <Fragment>
                    <Menu>
                        <Container fluid={true} >
                            <Row>
                                <Col sm={12} md={12} lg={12} >
                                    <Card>
                                        <Card.Body>
                                            <BootstrapTable
                                                keyField='id'
                                                data={ allData }
                                                columns={ columns }
                                                pagination={ paginationFactory() }
                                            />
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

export default ContactPage;
