import React, { Component } from 'react';
import {Link} from "react-router-dom";
var Refund = require("../images/refund.png")
var Forms = require("../images/forms.png")
var Seminars = require("../images/seminars.png")
var Qb = require("../images/qb.png")
var Sage = require("../images/sage.png")
export class Home extends Component {
    render(){
    return(
        <body>
            <div className='infoboxs'>
            <div className='info'>
            <Link className='mainlinks' to="/">Who we are</Link>
            <p>Accounting Unlimited, Inc. is one of the leading firms in and
                throughout the country. By combining our expertise, experience 
                and the team mentality of our staff, we assure that every client 
                receives the close analysis and attention they deserve.
            </p>
            </div>
            <div className='info'>
            <Link className='mainlinks' to="/">Contact Us</Link>
            <p>For a map to our home office and more information on how to 
                contact our office or to send us an email
            </p>
            </div>
            <div className='info'>
                <Link className='mainlinks' to="/">Tax Tools</Link>
                <p>We have provided calculators as a resource for you to help plan 
                your financial matters. Enter your criteria and you will find 
                answers with dynamic graphs and personalized reports.
            </p>
            </div>
            </div>
            <div className='infoboxs1'>
            <div className='secondlinks'>
                <Link className='mainlinks' to="/">Refund</Link>
                <img className="logo" src={Refund} alt="accounting unlimited"/>
            </div>
            <div className='secondlinks'>
                <Link className='mainlinks' to="/">Forms</Link>
                <img className="logo" src={Forms} alt="accounting unlimited"/>
            </div>
            <div className='secondlinks'>
                <Link className='mainlinks' to="/">Seminars</Link>
                <img className="logo" src={Seminars} alt="accounting unlimited"/>
            </div>
            </div>
            <div className='logos'>
                <img className="qb" src={Qb} alt="accounting unlimited"/>
                <img className="qb" src={Sage} alt="accounting unlimited"/>
            </div>
        </body>
    )
  }
}
export default Home