import Header from './Components/Header';
import Signaturevenu from './Components/Signaturevenu';
import './Conference.css';


function Conference(){
    return(
        <div className="page">
            <header>
                <section className='header'>
                   <div className='row'>
                        <Header/>
                    </div> 
                </section>
            </header>
            <body className='body'  style={{backgroundImage:'url(../bg_textue.jpg)'}}>
                {/* Section 1 */}
                <section class="banner" style={{backgroundImage:'url(../event-banner.jpg)'}}></section>

                {/* Section 2 */}
                <section class="signature_venu">
                    <div className='row'>
                        <Signaturevenu title="SIGNATURE VENUES"/>
                    </div>
                </section>

                {/* Section 3 */}
                <section class="guest_review"></section>
            </body>
        </div>
    );
}

export default Conference;