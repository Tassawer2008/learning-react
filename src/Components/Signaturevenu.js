import React, {Component} from "react";

class Signaturevenu extends Component{
    render(){
        return(
            <div className="row_inner">
                <div className="top_text">
                    <h3>SIGNATURE VENUES</h3>
                    <div className="bor"></div>
                    <h2>BRINGING PEOPLE TOGETHER</h2>
                    <p>Our commitment and professionalism over the years have made <br/>Holiday Grand Resort a symbol of trust and prestige. In step with the changing needs and customer expectation, we facilitate ideas that have the potential to transform your business by taking your event to the next level.</p>
                </div>
                <div className="flex_row">
                    <div class="rides-text">
                        <h3>INAUGURATE UNFORGETTABLE</h3>
                        <h2>PRODUCT LAUNCHES</h2>
                        <p>Our contemporary meeting spaces are ideal for high-profile meetings and events, where partners gather to inspire, exchange ideas, and reach beyond their goals.</p>
                        <a href="contact" className="enquire_btn">Enquire Now</a>
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
                        <h3>CREATE POWERFUL</h3>
                        <h2>SEMINARS</h2>
                        <p>Our contemporary meeting spaces are ideal for high-profile meetings and events, where partners gather to inspire, exchange ideas, and reach beyond their goals.</p>
                        <a href="contact" className="enquire_btn">Enquire Now</a>
                    </div>
                    
                </div>
                <div className="flex_row">
                    <div class="rides-text">
                        <h3>DESIGN WINNING</h3>
                        <h2>TRAINING & WORKSHOPS</h2>
                        <p>Our contemporary meeting spaces are ideal for high-profile meetings and events, where partners gather to inspire, exchange ideas, and reach beyond their goals.</p>
                        <a href="contact" className="enquire_btn">Enquire Now</a>
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
                        <h3>DESIGN WINNING</h3>
                        <h2>CORPORATE EVENTS</h2>
                        <p>Our contemporary meeting spaces are ideal for high-profile meetings and events, where partners gather to inspire, exchange ideas, and reach beyond their goals.</p>
                        <a href="contact" className="enquire_btn">Enquire Now</a>
                    </div>
                    
                </div>
            </div> 
        );  
    }
}

export default Signaturevenu;