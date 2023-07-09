import React, { Component } from "react";
import axios from 'axios';
import './main.css';
import Logo from '../../oof.jpg'
import Banner from '../../resources/Images/123.PNG';
import BodyPic from '../../resources/Images/a.png';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A zipcode was submitted: ' + this.state.value);
        event.preventDefault();
        window.location.href = "https://www.golfnow.com/tee-times/search#qc=GeoLocation&q=30019&sortby=Facilities.Distance.0&view=Course&date=Jul+09+2023&holes=3&radius=25&timemax=42&timemin=10&players=0&pricemax=10000&pricemin=0&longitude=-83.8795&latitude=33.9883";
      }

    render() {

        return (
            <div>
              {/* Website landing page banner */}
              <div className="landingBanner">
                    <img src={Banner} className="bannerImg" alt="Landing page banner"></img>
                </div>
                <div classname="body">
                <h2>
                    Enter the zipcode of your destination to find top rated courses nearby!
                </h2>
                <div class="form">
                <form classname="zipLanding" onSubmit={this.handleSubmit}>
  <label>
    Zipcode: 
    <input type="text" value={this.state.value} onChange={this.handleChange} />
  </label>
  <input type="submit" value="Submit" />
</form>
</div>
                </div>
                </div>
                );
        }
 }
                

                export default LandingPage;
