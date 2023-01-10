import React, { Component } from 'react';

export class Home extends Component {
    render(){
    return(
        <body>
            <div className='infoboxs'>
            <div className='info'>
            <h1>Who we are</h1>
            <p>Accounting Unlimited, Inc. is one of the leading firms in and
                throughout the country. By combining our expertise, experience 
                and the team mentality of our staff, we assure that every client 
                receives the close analysis and attention they deserve.
            </p>
            </div>
            <div className='info'>
            <h1>Contact Us</h1>
            <p>For a map to our home office and more information on how to 
                contact our office or to send us an email
            </p>
            </div>
            <div className='info'>
            <h1>Tax Tools</h1>
            <p>We have provided calculators as a resource for you to help plan 
                your financial matters. Enter your criteria and you will find 
                answers with dynamic graphs and personalized reports.
            </p>
            </div>
            </div>
        </body>
    )
  }
}
export default Home