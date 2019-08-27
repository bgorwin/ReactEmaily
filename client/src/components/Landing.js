import React from 'react';

const Landing = () => {
  return (<div>
    <div id="landingOverlay">
      <div id="landingBanner" style={{
          textAlign: 'center',
          paddingTop: '20%'
        }}>
        <h1>Welcome to Emaily!</h1>
      <h5>An email service where you can collect feedback from your users</h5>
    <h5>Scroll down to see how it works</h5>
      </div>
    </div>

    {/* How It Works Section */}
    <div>
      <div style={{
          textAlign: 'center'
        }}><h1>How It Works</h1></div>
      <div className="row" id="howLanding">
        <div className="col s12 m8 l6 align-center container" >
          <h1 id="imageHow" alt="">H</h1>
        </div>
        <div className="col s12 m4 l6 container"><p className="flow-text align-left">To get started, please sign in with your Google email to create your profile and purchase credits for amount of emails that you would like to send out. You can then click the "+" symbol at the bottom right corner to start a new campaign and send them out to your recipients. Once the receipients complete the survey within their email, you will receive their responses back in your surveys dashboard with their results. </p></div>
      </div>

      {/* About Me Section */}

      <div className="row" id="aboutMeLanding" style={{ backgroundColor: '#F8F8F8' }}>
        <h1 style={{
            textAlign: 'center',
            backgroundColor: '#F8F8F8'
          }}>About Me</h1>
        <div className="col s12 m8 l6 align-center container" >
          <h1 id="imageAbout" alt="">A</h1>
        </div>
        <div className="col s12 m4 l6 container"><p className="flow-text align-left">I build this project as a portfolio piece to showcase my skills in this full stack application. I feel that this could be a useful tool that marketing teams can utilize to gain some feedback from their users and with that data, work towards making strategic strategies to achieve the goals set by the company.</p></div>
      </div>

      {/* Contact Us Section */}
      <div style={{
          textAlign: 'center'
        }}><h1>Contact Us</h1></div>
      <div className="row">
        <div className="col s12 m8 l6 align-center container" >
          <h1 id="imageContact" alt="">C</h1>
        </div>
        <div className="col s12 m4 l6 container" id="contactUsLanding"><p className="flow-text align-center"> Email: brent.gorwin@gmail.com</p></div>
      </div>
    </div>
  </div>);
};

export default Landing;
