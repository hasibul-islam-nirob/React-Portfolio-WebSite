import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import CoursePage from "../pages/CoursePage";
import ProjectPage from "../pages/ProjectPage";
import ServicesPage from "../pages/ServicesPage";
import ReviewsPage from "../pages/ReviewsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/project" component={ProjectPage}/>
                    <Route exact path="/services" component={ServicesPage}/>
                    <Route exact path="/reviews" component={ReviewsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
