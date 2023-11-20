import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/css/games.css"

const Games = () => {
    return (
        <div>
            <Header/>
            <div className="container-pure">
                <section className="games-s1">
                    <div className="games-s1-box">
                        <div className="games-s1-box-item">
                            <div className="games-s1-box-item-left">
                                <img src={require('../assets/img/Photo block.png')} alt=""/>
                            </div>
                            <div className="games-s1-box-item-right">
                                <h1>Near Runner</h1>
                                <p>
                                    Near Runner is an animated, colorful, cartoonish game combining single-player and
                                    multiplayer modes. Test your skills against another player in an online match, climb
                                    to
                                    the top of the global leaderboard and show your friend and others who the boss is!
                                </p>
                                <a href="#">Join us</a>
                            </div>
                        </div>
                        <div className="games-s1-box-item">
                            <div className="games-s1-box-item-left">
                                <img src={require('../assets/img/Photo block.png')} alt=""/>
                            </div>
                            <div className="games-s1-box-item-right">
                                <h1>Chubby Runners</h1>
                                <p>Otto Runners is an adorable, silly, and simple-to-learn game combining mobile runner
                                    and battle royale genres. There is just you and a desire to outperform your fellow
                                    players. You need to survive, earn points, and race to the finish line round by
                                    round. Momentum really matters.</p>
                                <div className="games-s1-right-box">
                                    <div>
                                        <h1>Platform</h1>
                                        <p>Mobile</p>
                                    </div>
                                    <div>
                                        <h1>Genre</h1>
                                        <p>Hyper-casual</p>
                                    </div>
                                    <div>
                                        <h1>Status</h1>
                                        <p>Beta version</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Games;