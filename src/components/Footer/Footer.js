import React from 'react'
import footerimg from './footerimg.webp'
import facebook from './images/facebook.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
import '../HomePageContent/QuoteEcosystem.css'
import './footerStyles.css'
function Footer() {
    return (
        <>
            <div className='Footer-box'>
                <div className='FooterWrap'>
                    {/* <div className='background-banner'>
                        <div className='text-description-ecosystem'>
                            <h2 className='heading-ecosystem'>Experience A Learning  <br />Ecosystem Like No Other!</h2>

                        </div>
                    </div> */}
                    <div className='footerimg'>
                        <img src={footerimg} className='footer-logo' />
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li><a href='#'>Join US</a></li>
                            <li><a href='#'>Contact US</a></li>
                            <li><a href='https://codevita.live/faqs/ ' target='_blank'>FAQ</a></li>
                            <li><a href="https://codevita.live/301-2/" target='_blank'>Explore other courses</a></li>

                        </ul>
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li><a href='https://codevita.live/terms-and-conditions' target='_blank'> Terms and Condition</a></li>
                            <li><a href='https://codevita.live/privacy-policy' target='_blank'>Privacy Policy</a></li>
                            <li><a href='https://codevita.live/refund-policy/' target='_blank'>Refund Policy</a></li>
                            <li><a href='https://codevita.live/pricing/' target='_blank'>Pricing</a></li>
                        </ul>
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li><a href='#'>Find Us on Social Network</a></li>
                            <span className='handleWrapper'>
                                <a href='https://www.facebook.com/codevitalive' target='_blank'>
                                    <img src={facebook} className='facebook handles' />
                                </a>
                                <a href='https://www.linkedin.com/company/codevita' target='_blank'>
                                    <img src={linkedin} className='linkedin handles' />
                                </a>
                                <a href='https://www.instagram.com/codevitalive/' target='_blank'>
                                    <img src={instagram} className='instagram handles' />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer