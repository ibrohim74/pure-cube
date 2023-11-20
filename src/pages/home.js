import React from 'react';
import Header from "../components/header";
import '../assets/css/home.css'
import Footer from "../components/footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="container-pure">
                <section className={'home-s1'}>
                    <div className="box-s1 wow animate__animated animate__fadeInUp">
                        <div className="item-box">
                            <div className="item-header">
                                <img src={require('../assets/img/Photo block.png')} alt=""/>
                            </div>
                            <div className="item-bottom">
                                <p>Uniting games into ecosystems</p>

                                <p>Mini-ecosystems on the PureCube universe allow in-game assets in the formats of NFTs
                                    and fungible tokens to be dispersed between united games, ensuring their value and
                                    continuity.</p>
                            </div>
                        </div>
                        <div className="item-box">
                            <div className="item-header">
                                <img src={require('../assets/img/Photo block.png')} alt=""/>
                            </div>
                            <div className="item-bottom">
                                <p>Marketplaces for blockchain inventory</p>
                                <p>Trading platforms enable an easy way to manage trades, and payments, ensure fraud
                                    protection, and provide more features to securely trade the collections of
                                    blockchain games.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-full-width">
                        <a href="#">AD</a>
                    </div>
                </section>
                <section className={'home-s2'}>
                    <div className="s2-box">
                        <div className="s2-item">
                            <div className="s2-left">
                                <h1>Our games</h1>
                                <p>Our dream is to create games that as many people as possible play for years and that
                                    are remembered forever.</p>
                                <a href="#">See our games</a>
                            </div>
                            <div className="s2-right">
                                <img src={require('../assets/img/home-s2.webp')} alt=""/>
                            </div>
                        </div>
                        <div className="s2-item">
                            <div className="s2-left order-s2">
                                <img src={require('../assets/img/home-s2.webp')} alt=""/>
                            </div>
                            <div className="s2-right">
                                <h1>Partnership and outsourcing</h1>
                                <p>We cooperate with other studios and indie developers in different stages of game
                                    development.</p>
                                <a href="#">Know more</a>
                            </div>
                        </div>
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

export default Home;