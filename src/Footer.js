import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div className="footer">
           <div className="cards">

           <div className="footer-content">
           <h3>Increase Your Traffic</h3>
           <h5>Ad Software</h5>
           <h5>Blog Software</h5>
           <h5>SEO Software</h5>
           <h5>Social Media Software</h5>
           <h5>Content Management System</h5>
       </div>

       <div className="footer-content">
           <h3>Connect with Leads</h3>
           <h5>Find New Prospects</h5>
           <h5>Email Tracking</h5>
           <h5>Sales Email Templates</h5>
           <h5>Click To Call Your Leads</h5>
           <h5>Email Marketing</h5>
       </div>
       <div className="footer-content">
           <h3>Close and Manage Leads</h3>
           <h5>Document Tracking Tool</h5>
           <h5>Meeting Schedule Tool</h5>
           <h5>Sales Automation Tool</h5>
           <h5>Lead Management Tool</h5>
           <h5>Pipeline Management Tool</h5>
       </div>
       <div className="footer-content">
           <h3>Support and Tools</h3>
           <h5>HubSpot Partners</h5>
           <h5>Join a Local User Group</h5>
           <h5>PieSync Integrations</h5>
           <h5>HubSpot Templates</h5>
           <h5>Free Tools & Generators</h5>
           <button className="support_button">Contact HubSpot Support</button>
           <div className="social_icons">
               <FacebookIcon />
               <InstagramIcon />
               <YouTubeIcon />
               <TwitterIcon />
               <LinkedInIcon />
           </div>
       </div>
           
           </div>
       
           <div className="languages">
                <h3>English</h3>
                <h3>French</h3>
                <h3>German</h3>
                <h3>Hindi</h3>
                <h3>Japanese</h3>
           </div>

           <div className="footer_bottom">
           <div className="copyright">
           <img src="https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_gray.svg" alt="" />
           <span>Copyright © 2020 HubSpot, Inc.</span>
          </div>

          <div className="terms">
               <span>Legal Stuff</span>
               <span>Privacy Poilcy</span>
          </div>
           </div>

           
        
        </div>
    )
}

export default Footer
