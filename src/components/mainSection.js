import React from 'react';

import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';

    function mainSection(){
        return(
            <div>
                <section className="hero main-hero is-large">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title mainText">
                            Eadojo
                        </h1>
                        <h2 className="subtitle mainText">
                            Create online courses for free
                        </h2>
                        </div>
                    </div>
                </section>
                <div className="boxSection">
                    <div className="box">
                    <div className="columns is-mobile">
                        <div className="column">
                            <figure className="boxItens">
                                <img src="https://img.icons8.com/nolan/64/000000/certificate.png" />
				            </figure>
                            <h3 className="title is-3">text_certify_students</h3>			
                        </div>
                        <div className="column">
                            <figure className="boxItens">
                                <img src="https://img.icons8.com/nolan/64/000000/edit-property.png" />
				            </figure>
                            <h3 className="title is-3">text_customizable</h3>			
                        </div>
                        <div className="column">
                            <figure className="boxItens">
                                <img src="https://img.icons8.com/nolan/64/000000/upload-to-cloud.png" />
				            </figure>
                            <h3 className="title is-3">text_eadojo_cloud</h3>			
                        </div>
                    </div>
                    </div>
                </div>

                <section className="hero is-small is-bold">
                    <div className="hero-body">
                        <div className="columns is-vcentered">
                        <div className="column is-2"></div>
                            <div className="column">
                            <h1 className="title is-1">
                                Everything you need
                            </h1>
                            <h2 className="subtitle is-3">
                                On the palm of your hand
                            </h2>
                            </div>
                        <div className="column">
                            <figure className="image is-16by9">
                                <img className="SecondSectionImage"/>
                            </figure>
                            
                            </div>
                        <div className="column is-1"></div>
                        </div>
                    </div>
                </section>

                <ThirdSection/>       

                <FourthSection/>      

                <FifthSection/>     

                <section className="mail">
                    <div className="container mailSection">
                    <i className="fas fa-envelope mailenvelope"></i>contact@eadojo.com
                    </div>
                </section>

                <footer className="footer">
                    <div className="columns footercollum has-text-centered">
                        <div className="column">Auto</div>
                        <div className="column">Auto</div>
                        <div className="column">Auto</div>
                        <div className="column">Auto</div>
                    </div>
                </footer>

            </div>
        )
    }

export default mainSection;