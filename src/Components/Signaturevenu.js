import { useState } from "react";

function Signaturevenu(props){
    const [box1]=useState({
        subheading : "DESIGN WINNING",
        heading : "CORPORATE EVENTS",
        des : "Our contemporary meeting spaces are ideal for high-profile meetings and events, where partners gather to inspire, exchange ideas, and reach beyond their goals.",
        buttonname : "Enquire Now"
    });
    const [box2]=useState({
        subheading : "INAUGURATE UNFORGETTABLE",
        heading : "PRODUCT LAUNCHES",
        des : "Our contemporary meeting spaces are ideal for high-profile meetings and events, where partners gather to inspire, exchange ideas, and reach beyond their goals.",
        buttonname : "Enquire Now"
    });
    const [box3]=useState({
        subheading : "CREATE POWERFUL",
        heading : "SEMINARS",
        des : "From intimate gatherings to large audiences, Holiday Grand Resort provides exceptional settings and state-of-the-art technology, creating impactful moments for seminars of all shapes and sizes.",
        buttonname : "Enquire Now"
    });
    const [box4]=useState({
        subheading : "PLAN EFFECTIVE",
        heading : "TRAINING & WORKSHOPS",
        des : "We provide creative and collaborating learning spaces that aid in experimentation and innovation, focusing on convenience and funtionality that surpass expectation.",
        buttonname : "Enquire Now"
    });
    return(
        <div className="row_inner">
            <div className="top_text">
                <h3>{props.title}</h3>
                <div className="bor"></div>
                <h2>BRINGING PEOPLE TOGETHER</h2>
                <p>Our commitment and professionalism over the years have made <br/>Holiday Grand Resort a symbol of trust and prestige. In step with the changing needs and customer expectation, we facilitate ideas that have the potential to transform your business by taking your event to the next level.</p>
            </div>
            <div className="flex_row">
                <div class="rides-text">
                    <h3>{box1.subheading}</h3>
                    <h2>{box1.heading}</h2>
                    <p>{box1.des}</p>
                    <a href="contact" className="enquire_btn">{box1.buttonname}</a>
                </div>
                <div className="rides_img">
                    <img src="../me-1.jpg" alt="ride1"/>
                </div>
            </div>
            <div className="flex_row">
                <div className="rides_img">
                    <img src="../me-2.jpg" alt="ride1"/>
                </div>
                <div class="rides-text">
                    <h3>{box2.subheading}</h3>
                    <h2>{box2.heading}</h2>
                    <p>{box2.des}</p>
                    <a href="contact" className="enquire_btn">{box2.buttonname}</a>
                </div>
                
            </div>
            <div className="flex_row">
                <div class="rides-text"> 
                    <h3>{box3.subheading}</h3>
                    <h2>{box3.heading}</h2>
                    <p>{box3.des}</p>
                    <a href="contact" className="enquire_btn">{box3.buttonname}</a>
                </div>
                <div className="rides_img">
                    <img src="../me-3.jpg" alt="ride1"/>
                </div>
            </div>
            <div className="flex_row">
                <div className="rides_img">
                    <img src="../me-4.jpg" alt="ride1"/>
                </div>
                <div class="rides-text">
                    <h3>{box4.subheading}</h3>
                    <h2>{box4.heading}</h2>
                    <p>{box4.des}</p>
                    <a href="contact" className="enquire_btn">{box4.buttonname}</a>
                </div>
                
            </div>
        </div> 
    )
}

export default Signaturevenu;