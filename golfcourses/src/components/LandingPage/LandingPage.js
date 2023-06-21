import React, { Component } from "react";
import axios from 'axios';
import './main.css';
import Logo from '../../oof.jpg'
import Banner from '../../resources/Images/12.png'
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
                    <img src={Banner} className="bannerImg" alt="Landing page banner"></img>
                </div>
                <div className="body">
                <a href="https://www.golfnow.com/tee-times/hot-deals#promotedcampaignsonly=false&timemax=42&timemin=10&hotdealsonly=true&date=Jun+23+2023">
                    Golf Now!
                    </a>
                    <br></br>
                </div>
                </div>
                );
        }
 }
                

                export default LandingPage;
