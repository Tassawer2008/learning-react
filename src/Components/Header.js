import React, {Component} from "react";
import Menu from "./Menu";

class Header extends Component{
    // constructor(){}

    render(){
        return(
            <div className="header_div">
                <div className="logo">
                    <img src='../hgrlogo.png' alt="logo"/>
                </div>
                <div className="menu_div">
                    <Menu/>
                </div>
                <div className="icon_div">
                    <a href="tel:0300-111-7463">0300 111 7463</a> <a className="header_btn" href="tel:0300-111-7463">Book Now</a>
                </div>
            </div>
        );
    }
}

export default Header;