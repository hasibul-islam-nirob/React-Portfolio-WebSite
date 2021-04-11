import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";
import TopBanner from "../components/TopBanner/TopBanner";

class NotFoundPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Not Found" />
                <PageTopSection/>
                <NotFound/>
                <Footer/>
            </Fragment>
        );
    }
}

export default NotFoundPage;