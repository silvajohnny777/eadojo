import React from 'react';

    class ThirdSection extends React.Component {

        constructor() {
            super()
            this.state = {
                link: 'dojo.jpg',
                value: 5
            }
            this.handleMouseEnter = this.handleMouseEnter.bind(this)
        }
        
        handleMouseEnter(event) {
            switch(event.target.value){
                case '0':
                    return this.setState({
                        link: 'dojo.jpg',
                        value: event.target.value
                    });
                case '1':
                    return this.setState({
                        link: 'main-bg.jpg',
                        value: event.target.value
                    });
                case '2':
                    return this.setState({
                        link: 'login-bg.jpg',
                        value: event.target.value
                    });
                case '3':
                    return this.setState({
                        link: 'main-bg2.jpg',
                        value: event.target.value
                    });
                case '4':
                    return this.setState({
                        link: 'secondSectionImg.jpg',
                        value: event.target.value
                    });

            }
        }
        
        render(){ 

            return (
                <div>
                    <section className="section ThirdSectionMain">
                        <div className="container ThirdSectionContainer">
                        <h1 className="title is-1 has-text-centered">
                            A powerful and flexible platform
                        </h1>
                        <h2 className="subtitle is-3 has-text-centered">
                            Different than anything you have seen before
                        </h2>
                        <figure className="image is-16by9">
                            <img className="ThirdSectionImage" src={require('../images/'+this.state.link)} />
                        </figure>

                        <div className="content ThirdSectionButtonsArea">
                            <button className="button ThirdSectionButton" onMouseEnter={this.handleMouseEnter} value="0">Feature 1</button>
                            <button className="button ThirdSectionButton" onMouseEnter={this.handleMouseEnter} value="1">Feature 2</button>
                            <button className="button ThirdSectionButton" onMouseEnter={this.handleMouseEnter} value="2">Feature 3</button>
                            <button className="button ThirdSectionButton" onMouseEnter={this.handleMouseEnter} value="3">Feature 4</button>
                            <button className="button ThirdSectionButton" onMouseEnter={this.handleMouseEnter} value="4">Feature 5</button>
                        </div>

                        </div>
                    </section>

                </div>
            )
        }
    }

export default ThirdSection;