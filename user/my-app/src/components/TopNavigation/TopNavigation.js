import React, {Component, Fragment} from 'react';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import {Nav,Navbar,NavDropdown} from "react-bootstrap";
import myLogo from "../../asset/images/myLogo.png"
import redLogo from "../../asset/images/redLogo.png"
import blueLogo from "../../asset/images/blueLogo.png"
import {Link, NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            myBrandLogo:[redLogo],
            navBgColor:"navBarBagraound",
            navItems:"navItem",
            navVariant:"dark",
            pageTitle:props.title
        }
    }

    onScrollChangeNavbar=()=>{
        if(window.scrollY > 100){
            this.setState({navVariant:"light", navBarTitle:"navTitleScroll", myBrandLogo:[blueLogo], navBgColor:"navBarBgScroll", navItems:"navItemScroll"});
        }else if (window.scrollY < 100){
            this.setState({navVariant:"dark", navBarTitle:"navTitle", myBrandLogo:[redLogo], navBgColor:"navBarBagraound", navItems:"navItem"});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScrollChangeNavbar);
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBgColor} fixed="top" collapseOnSelect expand="lg" >
                    <Link to="/">
                        <Navbar.Brand className={this.state.navBarTitle}> <img src={this.state.myBrandLogo} /> Nirob</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav  >
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/">Home</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/service">Services</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/course">Courses</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/portfolio">Portfolio</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/contact">Contact</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/about">About</NavLink> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;