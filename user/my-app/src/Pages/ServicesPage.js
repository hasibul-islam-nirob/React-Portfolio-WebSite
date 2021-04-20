import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services" />
                <PageTopSection pageTopTitle="My Services" />
                <Services/>
                <ContactForm/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;