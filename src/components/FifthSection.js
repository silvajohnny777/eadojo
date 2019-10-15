import React from 'react';


    function FifthSection() {
        return (
            <div>
                <section className="section fifthSection">
                    <div className="container fifthContainer">
                        <h1 className="title is-1 has-text-centered"><i className="fas fa-comments"></i> Do you need help?</h1><hr/>
                        <h2 className="subtitle is-4 has-text-centered">
                            If you have any questions, we have an expert team that can help you. Ask something!
                        </h2>
                        <div className="button-chat">
                        <p className="buttons">
                        <a className="button is-large is-warning">
                            <span>Start Chat</span>
                            <span className="icon">
                            <i className="fas fa-chevron-right"></i>
                            </span>
                        </a></p>
                        </div>
                    </div>
                </section>  
            </div>
        )
    }

export default FifthSection;

