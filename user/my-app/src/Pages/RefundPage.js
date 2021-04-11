import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy" />
                <PageTopSection pageTopTitle="Our Refund Policy" />
                <RefundPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;