import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/css/firstBlock.css"

const FirstBlock = () => {
    return (
        <div>
            <Header/>
            <div className="container-pure">
                <section className="first-s1">
                    <div className="first-s1-box">
                        <h1>First block</h1>
                        <p>Near Runner is an animated, colorful, cartoonish game combining single-player and multiplayer
                            modes. Test your skills against another player in an online match, climb to the top of the
                            global leaderboard and show your friend and others who the boss is!</p>
                        <a href="#">learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M9.26998 1.02023L17.4851 9.23533L9.26998 17.4504L7.87482 16.125L13.4998 10.5L1.05489 10.5L1.05489 8.25004L13.4998 8.25004L7.87482 2.62504L9.26998 1.02023Z"
                                      fill="#fff"/>
                            </svg>
                        </a>
                    </div>
                </section>
                <section className={'first-s2'}>
                    <div className="first-s1-box">
                        <h1>The mission</h1>
                        <p>The mission of games by PureCube is to bridge the gap between web 2.0 and web 3.0. We set
                            three priorities to achieve our goal</p> <br/>
                        <div className="first-s2-box">
                            <div className="first-s2-box-item">
                                <h1>Open doors</h1>
                                <p>Everyone can play for free. No wallet is required.</p>
                            </div>
                            <div className="first-s2-box-item">
                                <h1>Fun to play</h1>
                                <p>Focus on delivering an engaging game experience with high replayability value.</p>
                            </div>
                            <div className="first-s2-box-item">
                                <h1>Blockchain</h1>
                                <p>The blockchain aspect is smartly integrated and optional for players to use.</p>
                            </div>
                        </div>
                        <a href="#">learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M9.26998 1.02023L17.4851 9.23533L9.26998 17.4504L7.87482 16.125L13.4998 10.5L1.05489 10.5L1.05489 8.25004L13.4998 8.25004L7.87482 2.62504L9.26998 1.02023Z"
                                      fill="#fff"/>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
            <section className="home-s3">
                <div className="container-pure">


                    <div className="home-s3-box">
                        <div className="home-s3-item">
                            <div className="home-s3-header">
                                <img src={require('../assets/img/Photo block.png')} alt=""/>
                            </div>
                            <div className="home-s3-bottom">
                                <p>Discover the games in the FIRST BLOCK ecosystem</p>
                            </div>
                        </div>
                        <div className="home-s3-item">
                            <div className="home-s3-header">
                                <img src={require('../assets/img/Photo block.png')} alt=""/>
                            </div>
                            <div className="home-s3-bottom">
                                <p>Discover the games in the FIRST BLOCK ecosystem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default FirstBlock;