import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/css/about.css"

const About = () => {
    return (
        <div>
            <Header/>
            <div className="pure-container">
                <section className="about-s1">
                    <div className="about-s1-box wow animate__animated animate__fadeInUp">
                        <h1>A little history</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p><a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10"
                                 fill="none" style={{marginRight: '10px'}}>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M1.89656 9.49598C1.80064 9.59902 1.62957 9.61295 1.51446 9.52708L1.09762 9.21612C0.982518 9.13025 0.966966 8.97711 1.06289 8.87407L4.66924 5.00004L1.06289 1.12601C0.966966 1.02297 0.982518 0.869828 1.09762 0.78396L1.51446 0.473003C1.62957 0.387136 1.80064 0.401058 1.89656 0.5041L5.93712 4.84456C6.02096 4.93463 6.02096 5.06545 5.93712 5.15552L1.89656 9.49598Z"
                                      fill="white" stroke="white" stroke-width="0.75"/>
                            </svg>
                            <ins>Show timeline</ins>
                        </a></p>
                    </div>
                </section>
                <section className="about-s2">
                    <div className="about-s2-box wow animate__animated animate__fadeInUp">
                        <h1>Our values</h1>
                        <ul>
                            <li>
                                <div className="about-element">
                                    <img src={require('../assets/img/about-element.png')} alt=""/>
                                </div>
                                <p>The quality of our games
                                    is most important to us, and the only way to achieve the best results is by creating
                                    the
                                    best team that works extremely well together.</p>
                            </li>
                            <li>
                                <div className="about-element">
                                    <img src={require('../assets/img/about-element.png')} alt=""/>
                                </div>
                                <p>We are not just building games; we are designing mini-ecosystems to create value for
                                    our players, and the gaming industry as well. </p>
                            </li>
                            <li>
                                <div className="about-element">
                                    <img src={require('../assets/img/about-element.png')} alt=""/>
                                </div>
                                <p>We set our goals ambitiously high and do not shy away from the climb. We are
                                    continuously seeking out innovation to succeed. </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="about-s3">
                    <div className="about-s3-box">
                        <h1>Metrics</h1>
                        <div className="about-s3-float">
                            <div className="about-s3-left">
                                <div className="about-s3-item">
                                    <h1>10</h1>
                                    <p>Number of employees</p>
                                </div>
                                <div className="about-s3-item">
                                    <h1>0</h1>
                                    <p>Live games</p>
                                </div>
                                <div className="about-s3-item">
                                    <h1>2</h1>
                                    <p>In development</p>
                                </div>
                            </div>
                            <div className="about-s3-right">
                                <div className="about-s3-item">
                                    <h1>3</h1>
                                    <p>Nationalities</p>
                                </div>
                                <div className="about-s3-item">
                                    <h1>0</h1>
                                    <p>Players to date</p>
                                </div>
                                <div className="about-s3-item">
                                    <h1>0</h1>
                                    <p>Projects killed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-s4 about-s1">
                    <div className="about-s1-box">
                        <h1>Everything changes</h1>
                        <p>Nowadays the world changing rapidly... And there is no chance always in a row to achieve
                            success and fulfill our dreams. But we always strive to make sure our work brings people joy
                            and happy memories.</p>
                    </div>
                </section>
            </div>
            <section className="about-s5">
                <div className="about-s5-box">
                    <div className="about-s5-item">
                        <div className="about-s5-item-left">
                            <h1>Co-development and
                                outsourcing services</h1>
                            <p>
                                We cooperate with other studios and indie developers in different stages of game
                                development.
                            </p>
                            <a href="#">
                                Know more
                            </a>
                        </div>
                        <div className="about-s5-item-right">
                            <img src={require('../assets/img/about-s5.png')} alt=""/>
                        </div>
                    </div>
                    <div className="about-s5-item">
                        <div className="about-s5-item-left">
                            <h1>Build the future of
                                gaming with us</h1>
                            <p>
                                Choose the job that suits you and become part of our friendly and professional team.
                            </p>
                            <a href="#">
                                Join us
                            </a>
                        </div>
                        <div className="about-s5-item-right">
                            <img src={require('../assets/img/about-s5-1.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default About;