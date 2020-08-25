import React from 'react'
import './HeaderTwo.css'
import Dropdown from './Dropdown'

function HeaderTwo() {
    return (
        <div className="header_two">
        <img 
        className="header_two_logo"
        src="https://static1.squarespace.com/static/5ada1776f407b48d98447844/5b5f36252b6a2828d2432f65/5be98988aa4a99b2badddf8b/1548367104672/Hubspot.png?format=1500w"
        alt="" />

            <div className="headerTwo_menu">
            <div class="dropdown">
                <div className="menu__title">
                    <span className="lang__title">Software</span>
                </div>
                <div className="dropdown-content">
                    <div className="dropdown_options_one">
                    <span className="headerTwo_spanTitle">Free HubSpot CRM</span>
                    <span className="headerTwo_spanDesc">All your contacts and conpanies,100% free </span>
                    </div>
                    <div className="dropdown_options_one">
                    <span className="headerTwo_spanTitle">Marketing Hub</span>
                    <span className="headerTwo_spanDesc">Marketing software to increase traffic and leads.Free and premium plans.</span>
                    </div>
                    <div className="dropdown_options_one">
                    <span className="headerTwo_spanTitle">Sales Hub</span>
                    <span className="headerTwo_spanDesc">Sales software for closing more deals,faster.Free and premium plans.</span>
                    </div>
                    <div className="dropdown_options_one">
                    <span className="headerTwo_spanTitle">Service Hub</span>
                    <span className="headerTwo_spanDesc">Software for providing first-clss customer service.Free and premium plans.</span>
                    </div>
                    <div className="dropdown_options_one">
                    <span className="headerTwo_spanTitle">CMS Hub</span>
                    <span className="headerTwo_spanDesc">Content management software to power websites.Premium plans and free trial.</span>
                    </div>
                    <div className="dropdown_options_one second">
                    <span className="headerTwo_spanTitle">App Marketplace</span>
                    <span className="headerTwo_spanDesc">Find HubSpot apps for the tools and software you use to run your</span>
                    </div>
                </div>
            </div>

            <span>Pricing</span>

            <div class="dropdown">
                    <div className="menu__title">
                        <span className="lang__title">Resources</span>
                    </div>
                    <div className="dropdown-content ">
                        <div className="dropdown_options last">
                            <div className="option_one">
                                <span>Blog</span>
                                <span className="option_desc">Read marketing,sales,agency,and 
                                customer<br/> success blog content</span>
                            </div>
                            <div className="option_one">
                                <span>Customer Stories</span>
                                <span className="option_desc">Hear from the businesses that use HubSpot<br/>
                                to grow better everyday</span>
                            </div>
                            <div className="option_one ">
                                <span>Developers</span>
                                <span className="option_desc">Create apps and custom integrations for<br/>businesses using HubSpot</span>
                            </div>
                        </div>

                        <div className="dropdown_options last">
                            <div className="option_one">
                                <span>Ebooks, Guides, and More</span>
                                <span className="option_desc">
                                    Get access to HubSpot's most popular<br /> marketing resource
                                </span>
                            </div>
                            <div className="option_one">
                                <span>Onboarding and Services</span>
                                <span className="option_desc">
                                    Find training and consulting services to help you<br/>
                                    thrive with HubSpot
                                </span>
                            </div>
                            <div className="option_one">
                                <span>Research & Reports</span>
                                <span className="option_desc">
                                Get up-to-date research and data on hot<br/>
                                business trends
                                </span>
                            </div>
                        </div>

                        <div className="dropdown_options last">
                            <div className="option_one">
                                <span>Free Cources & Certifications</span>
                                <span className="option_desc">take cources on latest business trends,<br/>
                                taught by industry experts.
                                </span>
                            </div>
                            <div className="option_one">
                                <span>What is Inbound?</span>
                                <span className="option_desc">
                                Get a primer on how inbound helps your<br/>
                                business grow better
                                </span>
                            </div>
                            <div className="option_one">
                                <span>Customer Support</span>
                                <span className="option_desc">
                                Get help if you have questions about using<br/>
                                HubSpot software.
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            <div className="dropdown">
                <div className="menu__title">
                    <span className="lang__title">Partners</span>
                </div>  
                <div className="dropdown-content">
                    <div className="dropdown_options">
                        <div className="option_one">
                            <span>Hire a partner</span>
                            <span className="option_desc">Find a partner in our global community of service<br/>
                                providers who can help you grow.
                            </span>
                        </div>
                        <div className="option_one">
                            <span>Partner with us</span>
                            <span className="option_desc">
                            Find the right partner program to help your business<br/>
                            grow.
                            </span>
                        </div>
                    </div>
                </div>
            </div>    
            
            <div className="dropdown">
                <div className="menu_title">
                    <span className="lang__title">About</span>
                </div>
                <div className="dropdown-content">
                    <div className="dropdown_options">
                        <div className="option">
                            <span>Company</span>
                            <span className="option_a">About us</span>
                            <span className="option_a">Contact us</span>
                            <span className="option_a">Management Team</span>
                            <span className="option_a">Board of Directors</span>
                            <span className="option_a">Carrers</span>
                        </div>
                        <div className="option">
                            <span>News</span>
                            <span className="option_a">HubSpot News</span>
                            <span className="option_a">Press Resources</span>
                            <span className="option_a">Speakers</span>
                        </div>
                        <div className="option">
                            <span>Investors</span>
                            <span className="option_a">Investor Relations</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeaderTwo
