import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from "axios";
import LoadingDiv from "../components/LoadingDiv";
import WentWrong from "../components/WentWrong";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ReviewsPage extends Component {
    constructor() {
        super();
        this.state={
            allData:[],
            isLoading:true,
            isError:false,
            rowDataId:"",
            deleteBtnText:"Delete"
        }
        this.onDataDelete = this.onDataDelete.bind(this);
        this.imgFormatting = this.imgFormatting.bind(this);
    }

    componentDidMount() {
        Axios.get('/selectReviews').then((response)=>{
            if (response.status==200){
                this.setState({allData:response.data,isLoading:false });
            }else {
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
            Axios.post('/deleteReview', {id:rowId}).then((response)=>{
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
                    this.componentDidMount();
                    this.setState({deleteBtnText:"Delete"});
                }else{
                    toast.error('Delete Fail', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: 0,
                    });
                    this.setState({deleteBtnText:"Delete"});
                }
            }).catch((error)=>{
                toast.error('Delete Fail', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: 0,
                });
                this.setState({deleteBtnText:"Delete"});

            })
        }


    }


    imgFormatting(sell, row){
        return <img className="table-cell-img" src={sell} />;
    };

    render() {
        const data = this.state.allData;
        const columns=[
            {dataField:'id',text:'ID'},
            {dataField:'client_img', text:'Image', formatter:this.imgFormatting},
            {dataField:'client_name',text:'Client Name'},
            {dataField:'client_description',text:'Client Description'}
        ]
        const selectRow ={
            mode:'radio',
            onSelect:(row, isSelect, rowIndex, e) => {
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
                    <Menu title="Review" >
                        <Container fluid={true}>
                            <Row>
                                <Col sm={12} lg={12} md={12} >
                                    <Button onClick={this.onDataDelete} className="normal-btn btn p-2 mt-3" >{this.state.deleteBtnText}</Button>
                                    <BootstrapTable
                                        keyField='id'
                                        data={ data }
                                        columns={ columns }
                                        pagination={ paginationFactory({nextPageText: "Next"}) }
                                        selectRow={selectRow}
                                    />
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
                </Fragment>
            );
        }

    }
}

export default ReviewsPage;
