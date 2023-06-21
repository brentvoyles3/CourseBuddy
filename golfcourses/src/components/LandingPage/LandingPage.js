import React, { Component } from "react";
import axios from 'axios';
import './main.css';
import Logo from '../../oof.jpg'
import { Link } from "react-router-dom";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (

            <div>
                {/* Website landing page banner */}
                <div className="landingBanner">
                    <img src={Logo} className="bannerImg" alt="Landing page banner"></img>
                </div>
                </div>
                );
        }
 }
                

                export default LandingPage;
