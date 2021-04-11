import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";


class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact" />
                <PageTopSection pageTopTitle="Contact With Me" />
                <ContactForm/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;