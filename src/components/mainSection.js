import React from 'react';

import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection'

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

                <div className="columns secondSection">
                    <div className="column is-half">
                        <section className="hero medium">
                            <div className="hero-body secondSectionText">
                                <div className="container">
                                <h1 className="title is-1">
                                    Everything you need
                                </h1>
                                <h2 className="subtitle is-3">
                                    On the palm of your hand
                                </h2>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="column secondSectionRight">
                        <figure className="image is-16by9">
                            <img className="SecondSectionImage"/>
                        </figure>
                    </div>
                </div>

                <ThirdSection/>       

                <FourthSection/>         

                <section className="section fifthSection">
                    <div className="container fifthContainer">
                        <h1 className="title is-1 has-text-centered"><i className="fas fa-comments"></i> Do you need help?</h1><br/>
                        <h2 className="subtitle is-4 has-text-centered">
                            If you have any questions, we have an expert team that can help you. Ask something!
                        </h2>
                        <p className="buttons">
                        <a className="button is-large is-warning">
                            <span>Start Chat</span>
                            <span className="icon">
                            <i className="fas fa-chevron-right"></i>
                            </span>
                        </a></p>
                    </div>
                </section>

                <section className="mail">
                    <div className="container mailSection">
                        HELLO
                    </div>
                </section>

            </div>
        )
    }

export default mainSection;