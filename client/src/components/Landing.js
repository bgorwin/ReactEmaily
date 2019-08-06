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
      <div class="row" id="howLanding">
        <div class="col s12 m8 l6 align-center container" >
          <img id="imageHow" alt=""></img>
        </div>
        <div class="col s12 m4 l6 container"><p class="flow-text align-left">How It Works:</p></div>
      </div>

      {/* About Me Section */}
      <div class="row" id="howLanding" style={{ backgroundColor: "#F8F8F8"}}>
        <div class="col s12 m8 l6 align-center container">
          <img id="imageHow" alt="" style={{ marginTop: "10%", marginBottom: "10%"}}></img>
        </div>
        <div class="col s12 m4 l6 container" style={{ marginTop: "3%"}}><p class="flow-text align-left">About Me</p></div>
      </div>

      {/* Contact Me Section */}
      <div class="row" id="howLanding">
        <div class="col s12 m8 l6 align-center container" >
          <img id="imageHow" alt=""></img>
        </div>
        <div class="col s12 m4 l6 container"><p class="flow-text align-left">Contact Us</p></div>
      </div>
    </div>
  </div>);
};

export default Landing;
