import React from 'react';
import '../assets/css/footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={'container-pure'}>
            <footer>
                <div className="footer-top-box">
                    <div className="footer-left-box">
                        <ul>
                            <li><h1>Products</h1></li>
                            <li><Link to={'#'}><p>Our games</p></Link></li>
                            <li><Link to={'#'}><p>Ecosystem</p></Link></li>
                        </ul>
                        <ul>
                            <li><h1>Links</h1></li>
                            <li><Link to={'#'}><p>About us</p></Link></li>
                            <li><Link to={'#'}><p>Careers</p></Link></li>
                            <li><Link to={'#'}><p>Contact us </p></Link></li>
                        </ul>
                    </div>
                    <div className="footer-right-box">
                        <ul>
                            <li><h1>Explore</h1></li>
                            <li><Link to={'#'}><p>Blog</p></Link></li>
                            <li><Link to={'#'}><p>Media kit</p></Link></li>
                        </ul>
                        <ul>
                            <li><h1>Learn</h1></li>
                            <li><Link to={'#'}><p>Terms & Conditions</p></Link></li>
                            <li><Link to={'#'}><p>Privacy Policy</p></Link></li>
                            <li><Link to={'#'}><p>Other legal docs</p></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <h1>Follow us on social networks:</h1>
                        <ul>
                            <li><Link to={'#'}><img src={require('../assets/img/twiter.webp')} alt=""/></Link></li>
                            <li><Link to={'#'}><img src={require('../assets/img/diskord.webp')} alt=""/></Link></li>
                        </ul>
                    </div>
                    <div className="footer-bottom-right">
                        <img src={require('../assets/img/logo.webp')} alt=""/>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;