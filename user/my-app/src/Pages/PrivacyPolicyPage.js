import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import Footer from "../components/Footer/Footer";
import PrivacyPolicySection from "../components/PrivacyPolicySection/PrivacyPolicySection";

class PrivacyPolicyPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy" />
                <PageTopSection pageTopTitle="Privacy Policy" />
                <PrivacyPolicySection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPolicyPage;