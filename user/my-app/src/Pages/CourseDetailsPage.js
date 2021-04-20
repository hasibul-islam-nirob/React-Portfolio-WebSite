import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import Footer from "../components/Footer/Footer";
import CourseDetailsSection from "../components/CourseDetailsSection/CourseDetailsSection";

class CourseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    constructor({match}) {
        super();
        this.state={
            myCourseID:match.params.courseID,
            courseName:match.params.courseName
        }
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details" />
                <PageTopSection pageTopTitle={this.state.courseName} />
                <CourseDetailsSection id={this.state.myCourseID} />
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;