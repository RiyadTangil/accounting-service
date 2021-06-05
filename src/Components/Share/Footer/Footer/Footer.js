import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Tax" , link: "/emergency"},
        {name: "Book keeping" , link: "/checkup"},
        {name: "Accountent" , link: "/personal-treatment"},
        {name: "QuickBOOk online" , link: "/tooth-extract"},
        {name: "Balance Sheet" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Tax" , link: "/emergency"},
        {name: "Book keeping" , link: "/checkup"},
        {name: "Accountent" , link: "/personal-treatment"},
        {name: "QuickBOOk online" , link: "/tooth-extract"},
        {name: "Balance Sheet" , link: "/checkup"},
        {name: "Balance Sheet" , link: "/checkup"},
        {name: "Balance Sheet" , link: "/checkup"},
    ]
    const services = [
        {name: "Tax" , link: "/emergency"},
        {name: "Book keeping" , link: "/checkup"},
        {name: "Accountent" , link: "/personal-treatment"},
        {name: "QuickBOOk online" , link: "/tooth-extract"},
        {name: "Balance Sheet" , link: "/checkup"},
        {name: "Balance Sheet" , link: "/checkup"},
        {name: "Balance Sheet" , link: "/checkup"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Consultant" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-light">
                            <h6>Call now</h6>
                            <button className="btn btn-brand text-light">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;