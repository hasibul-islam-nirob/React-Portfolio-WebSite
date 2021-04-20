import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import Footer from "../components/Footer/Footer";
import ProjectDetailsSection from "../components/ProjectDetailsSection/ProjectDetailsSection";

class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    constructor({match}) {
        super();
        this.state={
            matchProjectID:match.params.projectID,
            projectName:match.params.projectName
        }
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details" />
                <PageTopSection pageTopTitle={this.state.projectName} />
                <ProjectDetailsSection id={this.state.matchProjectID} />
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;