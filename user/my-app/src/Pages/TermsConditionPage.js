import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/Footer/Footer";
import TermsConditionSection from "../components/TermsConditionSection/TermsConditionSection";

class TermsConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition" />
                <PageTopSection pageTopTitle="Terms & Condition" />
                <TermsConditionSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsConditionPage;