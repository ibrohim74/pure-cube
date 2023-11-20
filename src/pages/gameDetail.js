import React from 'react';
import Header from "../components/header";
import '../assets/css/gameDetail.css'
import Footer from "../components/footer";
import {Splide, SplideSlide} from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

const GameDetail = () => {
    return (
        <div>
            <Header/>
            <div className="container-pure">
                <section className="gameDetail-s1">
                    <div className="gameDetail-s1-box">
                        <div className="gameDetail-s1-left">
                            <div className="gameDetail-s1-item">
                                <img src={require('../assets/img/Photo block.png')} alt=""/>
                            </div>
                            <div className="gameDetail-s1-item">
                                <div className="gameDetail-s1-item-text">
                                    <h1>Platform</h1>
                                    <p>Mobile</p>
                                </div>
                            </div>
                            <div className='gameDetail-s1-line'></div>

                            <div className="gameDetail-s1-item">
                                <div className="gameDetail-s1-item-text">
                                    <h1>Genre</h1>
                                    <p>Mobile runner</p>
                                </div>

                            </div>
                            <div className='gameDetail-s1-line'></div>
                            <div className="gameDetail-s1-item">
                                <div className="gameDetail-s1-item-text">
                                    <h1>Status</h1>
                                    <p>Beta</p>
                                </div>
                            </div>
                            <div className='gameDetail-s1-line'></div>

                            <div className="gameDetail-s1-item gameDetail-s1-none">
                                <div className="gameDetail-s1-item-text">
                                    <h1>Release date</h1>
                                    <p>Unity</p>
                                </div>
                            </div>
                            <div className='gameDetail-s1-line'></div>

                            <div className="gameDetail-s1-item gameDetail-s1-none">
                                <div className="gameDetail-s1-item-text">
                                    <h1>Blockchain</h1>
                                    <p>No</p>
                                </div>
                            </div>

                        </div>
                        <div className="gameDetail-s1-right">
                            <div className="gameDetail-s1-item">
                                <div className="gameDetail-s1-item-text">
                                    <h1>Release date</h1>
                                    <p>Unity</p>
                                </div>
                            </div>
                            <div className='gameDetail-s1-line'></div>

                            <div className="gameDetail-s1-item">
                                <div className="gameDetail-s1-item-text">
                                    <h1>Blockchain</h1>
                                    <p>No</p>
                                </div>
                            </div>
                            <div className="gameDetail-s1-item">

                            </div>
                        </div>
                    </div>
                </section>
                <section className="gameDetail-s2">
                    <div className="gameDetail-s2-left">
                        <div className="about-s1-box">
                            <h1>Description</h1>
                            <p>Chubby Runners is an adorable, silly, and simple-to-learn game combining mobile runner
                                and battle royale genres. There is just you and a desire to outperform your fellow
                                players. You need to survive, earn points, and race to the finish line round by round.
                                Momentum really matters.</p>
                            <br/>
                            <p><a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10"
                                     fill="none" style={{marginRight: '10px'}}>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M1.89656 9.49598C1.80064 9.59902 1.62957 9.61295 1.51446 9.52708L1.09762 9.21612C0.982518 9.13025 0.966966 8.97711 1.06289 8.87407L4.66924 5.00004L1.06289 1.12601C0.966966 1.02297 0.982518 0.869828 1.09762 0.78396L1.51446 0.473003C1.62957 0.387136 1.80064 0.401058 1.89656 0.5041L5.93712 4.84456C6.02096 4.93463 6.02096 5.06545 5.93712 5.15552L1.89656 9.49598Z"
                                          fill="white" stroke="white" stroke-width="0.75"/>
                                </svg>
                                <ins>Show more</ins>
                            </a></p>
                        </div>
                    </div>
                    <div className="gameDetail-s2-right">
                        <img src={require('../assets/img/gameDetail-s2.png')} alt=""
                             className={'gameDetail-s2-right-img'}/>
                        <img src={require('../assets/img/home-s2.webp')} alt="" className={'gameDetail-s2-right-img2'}/>
                    </div>
                </section>
                <section className="gameDetail-s3">
                    <h1>Screenshots</h1>
                    <Splide aria-label="My Favorite Images" options={{
                        perPage: 3,
                        type: 'loop',
                        width: "100%",
                        rewind: true,
                        breakpoints: {
                            800: {perPage: 1}
                        }
                    }}>
                        <SplideSlide>
                            <img src={require('../assets/img/Photo block.png')} alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={require('../assets/img/home-s2.webp')} alt="Image 1"/>
                        </SplideSlide>
                    </Splide>
                </section>
                <section className="gameDetail-s4">
                    <div className="gameDetail-s4-box">
                        <h1>Logo</h1>
                        <p>It's an impressive and charming game filled with genuinely dramatic moments, heartbreaking
                            losses, and last-second acrobatic feats.</p>
                        <div className="gameDetail-s4-img-box">
                            <a href="#"><img src={require('../assets/img/appStore.png')} alt=""/></a>
                            <a href="#"><img src={require('../assets/img/playMarket.png')} alt=""/></a>
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

export default GameDetail;