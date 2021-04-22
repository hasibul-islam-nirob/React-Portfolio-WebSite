import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import AboutPageInformation from "../components/AboutPageInformation/AboutPageInformation";
import Footer from "../components/Footer/Footer";



class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About" />
                <PageTopSection pageTopTitle="About Me" />
                <AboutPageInformation/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;