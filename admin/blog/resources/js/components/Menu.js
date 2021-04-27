import React, {Component, Fragment} from 'react';
import {Navbar, NavLink} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBookOpen, faCode, faHome, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {faComment, faEnvelope, faFolder} from "@fortawesome/free-regular-svg-icons";

class Menu extends Component {
    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            mainDivOverlay:"main-overlay-close",
            NavText:"d-none",
        }

        this.showHideSideNav=this.showHideSideNav.bind(this);
    }

    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar  expand="lg" className="fixed-top shadow-sm bg-white mb-5 py-3" variant="light" bg="white">
                    <Navbar.Brand onClick={this.showHideSideNav}  href="#"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <b>ADMIN DASHBOARD</b>
                </Navbar>

                <div className={this.state.sideNavClass}>
                    <NavLink><Link className="my-0 p-2 text-white" to="/"> <FontAwesomeIcon icon={faHome}/>      <span className={this.state.NavText} >Home</span> </Link> </NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/contact"> <FontAwesomeIcon icon={faEnvelope}/>  <span className={this.state.NavText} >Contact</span></Link> </NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/course"> <FontAwesomeIcon icon={faBookOpen}/>  <span className={this.state.NavText} >Courses</span></Link> </NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/project"> <FontAwesomeIcon icon={faCode}/>      <span className={this.state.NavText} >Projects</span></Link> </NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/services"> <FontAwesomeIcon icon={faFolder}/>    <span className={this.state.NavText} >Services</span></Link> </NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/reviews"> <FontAwesomeIcon icon={faComment}/>   <span className={this.state.NavText} >Review</span></Link> </NavLink>
                    <a className=" ml-3 NavItem p-2" href="/Logout"> <FontAwesomeIcon  icon={faPowerOff} /> <span className={this.state.NavText} >Sign Out</span></a>
                </div>

                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>

                <div className="mainDiv">
                    {this.props.children}
                </div>


            </Fragment>
        );
    }
}

export default Menu;
