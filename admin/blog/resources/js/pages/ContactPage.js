import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
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
            isError:false,
            rowDataId:"",
            deleteBtnText:"Delete"
        }
        this.onDataDelete = this.onDataDelete.bind(this);
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

    onDataDelete(){

        let permission = confirm("Do you want to delete this ?");
        if (permission === true){
            this.setState({deleteBtnText:<span> <Spinner animation='border' as='span' size='sm' role='status' aria-hidden='true'/> Deleting...</span>});
            let rowId = this.state.rowDataId;
            Axios.post('/contactDelete', {id:rowId}).then((response)=>{
                if (response.status==200 && response.data==1 ){
                    this.setState({deleteBtnText:"Delete Success"});
                    this.componentDidMount();
                    setTimeout(function (){
                        this.setState({deleteBtnText:"Delete"});
                    }.bind(this),3000);
                }else{
                    this.setState({deleteBtnText:"Delete Fail"});
                    this.componentDidMount();
                    setTimeout(function (){
                        this.setState({deleteBtnText:"Delete"});
                    }.bind(this),3000);
                }
            }).catch((error)=>{
                this.setState({deleteBtnText:"Went Wrong"});
                this.componentDidMount();
                setTimeout(function (){
                    this.setState({deleteBtnText:"Delete"});
                }.bind(this),3000);
            })
        }


    }

    render() {
        const allData = this.state.contactData;
        const columns = [
            {dataField:'id', text:'Id'},
            {dataField:'person_name', text:'Name'},
            {dataField:'person_email', text:'Email'},
            {dataField:'person_massage', text:'Massage'},
            {dataField:'msg_time', text:'Date & Time'},
            {text: "Actions"},
        ];
        const selectRow ={
            mode:"radio",
            onSelect: (row, isSelect, rowIndex, e) => {
               this.setState({rowDataId:row['id']});
            }
        }

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
                                    <Button onClick={this.onDataDelete} className="normal-btn btn p-2 mt-3" >{this.state.deleteBtnText}</Button>
                                    <Card>
                                        <Card.Body>
                                            <BootstrapTable
                                                keyField='id'
                                                data={ allData }
                                                columns={ columns }
                                                pagination={ paginationFactory({nextPageText: "Next"}) }

                                                selectRow={selectRow}
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
