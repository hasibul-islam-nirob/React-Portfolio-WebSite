import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Button, Card, Col, Container, Form, Modal, Row, Spinner} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from "axios";
import LoadingDiv from "../components/LoadingDiv";
import WentWrong from "../components/WentWrong";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class ServicesPage extends Component {

    constructor() {
        super();
        this.state= {
            allData: [],
            isLoading:true,
            isError:false,
            rowDataId:"",
            deleteBtnText:"Delete",
            addNewModal:false
        }
        this.onDataDelete = this.onDataDelete.bind(this);
        this.imgFormatting = this.imgFormatting.bind(this);

        this.addNewModalOpen = this.addNewModalOpen.bind(this);
        this.addNewModalClose = this.addNewModalClose.bind(this);
    }

    addNewModalOpen(){
        this.setState({addNewModal:true});
    }
    addNewModalClose(){
        this.setState({addNewModal:false});
    }

    componentDidMount() {
        Axios.get('/selectServices').then((response)=>{
            if (response.status==200){
                this.setState({allData:response.data,isLoading:false });
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
            Axios.post('/deleteServices', {id:rowId}).then((response)=>{
                if (response.status==200 && response.data==1 ){
                    toast.success('Delete Success', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: 0,
                    });
                    this.setState({deleteBtnText:"Delete Success"});
                    this.componentDidMount();
                    setTimeout(function (){
                        this.setState({deleteBtnText:"Delete"});
                    }.bind(this),3000);
                }else{
                    this.setState({deleteBtnText:"Delete Fail"});
                    toast.error('Delete Fail', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: 0,
                    });
                    this.componentDidMount();
                    setTimeout(function (){
                        this.setState({deleteBtnText:"Delete"});
                    }.bind(this),3000);
                }
            }).catch((error)=>{
                this.setState({deleteBtnText:"Went Wrong"});
                toast.error('Delete Fail', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: 0,
                });
                this.componentDidMount();
                setTimeout(function (){
                    this.setState({deleteBtnText:"Delete"});
                }.bind(this),3000);
            })
        }


    }

    imgFormatting(sell, row){
        return <img className="table-cell-img" src={sell} />;
    };

    render() {
        const allData = this.state.allData;
        const columns = [
            {dataField:'id', text:'Id'},
            {dataField:'service_img', text:'Image', formatter:this.imgFormatting},
            {dataField:'service_title', text:'Service Title'},
            {dataField:'service_description', text:'Service Description'},
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
                    <Menu title="Services" >
                        <Container fluid={true} >
                            <Row>
                                <Col sm={12} md={12} lg={12} >
                                    <Button onClick={this.onDataDelete} className="normal-btn btn p-2 mt-3" >{this.state.deleteBtnText}</Button>
                                    <Button onClick={this.addNewModalOpen} className="normal-btn btn p-2 mt-3" >Add Services</Button>

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
                            <ToastContainer
                                position="bottom-center"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss={false}
                                draggable
                                pauseOnHover={false}
                            />
                        </Container>
                    </Menu>

                    <Modal show={this.state.addNewModal} onHide={this.addNewModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Services</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                <Form.Group>
                                    <Form.Label>Services Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Client Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Services Desc</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Client Say" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Services Image</Form.Label>
                                    <Form.Control type="file" placeholder="" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary" onClick={this.addNewModalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>

            );
        }

    }
}

export default ServicesPage;
