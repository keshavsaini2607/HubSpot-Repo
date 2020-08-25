import React from 'react'
import './CardTwo.css'
import Poster from './Poster'

function CardTwo() {
    return (
        <div className="cardTwo_s">
            <div className="cardTwo">
            <h1>Powerful alone.<br/> Better together.</h1>
            <p>
            HubSpot offers a full stack of software for<br/> marketing, sales, and customer service,<br/> with a completely free CRM at its core.<br/> They’re powerful alone — but even better<br/> when used together.
            </p>
            </div>
            

            <div className="poster_1">
            <div className="posters">
            <Poster heading='Free HubSpot CRM' para="Everything you need to organize,
             track, and build better relationships with leads and customers. Yes, it's 100% free. Forever." op1='Contact Insights' op2='Deals' op3='Tasks'
              title="Popular Features"
              buttonText="Get free CRM"
              />
            </div>

            <div className="posters">
            <Poster heading="CMS Hub" para="Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience."
            op1="Drag-and-Drop Editor"
            op2="SEO Recommendations"
            op3="Website Themes"
            title="POPULAR FEATURES"
            buttonText="Get started" />
            </div>


            

            </div>

            <div className="poster_2">
            <div className="posters">
            <Poster heading='Sales Hub' para="Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster." 
            op1='Email Tracking' op2='Meeting Scheduling' op3='Email Automation'
              title="Popular Features"
              buttonText="Get free CRM"
              />
            </div>

            <div className="posters">
            <Poster heading="Service Hub" para="Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business."
            op1="Tickets"
            op2="Customer Feedback"
            op3="Knowledge Base"
            title="POPULAR FEATURES"
            buttonText="Get started" />
            </div>

            <div className="posters">
            <Poster heading="Marketing Hub" para="Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale."
            op1="Lead Generation"
            op2="Marketing Automation"
            op3="Analytics"
            title="POPULAR FEATURES"
            buttonText="Get started" />
            </div>
           

            </div>
            
         
            

            
        </div>
    )
}

export default CardTwo
