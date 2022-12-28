import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import React from "react";

export default function Info() {
  return (
    <div className="profileCard">
     <img className="profilePicture" src={"https://raw.githubusercontent.com/salehghari/profile-card-ReactJS/main/src/images/Profile-Picture.png"} alt ="Profile Picture" />
     <div className="info">
      <h1 className="textName">joe doe</h1>
       <h3 className="professionText">front end developer</h3>
       <h4 className="websiteText">joedoe.website</h4>
       <button className="emailButton">
         <img className="emailIcon"  src={"https://raw.githubusercontent.com/salehghari/profile-card-ReactJS/main/src/images/Email-Icon.svg"}/>
         email
         </button>
         <button className="linkedInButton">
          <img className="linkedInIcon" src={"https://raw.githubusercontent.com/salehghari/profile-card-ReactJS/main/src/images/LinkedIn-Icon.svg"} />
          LinkedIn

           </button>
           <div className="moreInfo">
           <About />
           <Interests />
           </div>
           <Footer />

             

       </div>

    </div>
  );
}