import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import Footer from "../components/Footer/Footer";
import ProjectDetailsSection from "../components/ProjectDetailsSection/ProjectDetailsSection";

class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details" />
                <PageTopSection pageTopTitle="Project Details" />
                <ProjectDetailsSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;