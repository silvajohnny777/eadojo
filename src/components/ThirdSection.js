import React from 'react';

    class ThirdSection extends React.Component {

        constructor() {
            super()
            this.state = {
                link: 'feature_1.jpg',
                title: 'Students',
                description: 'Students description',
                value: 5
            }
            this.handleMouseEnter = this.handleMouseEnter.bind(this)
        }
        
        handleMouseEnter(event) {
            switch(event.target.value){
                case '0':
                    return this.setState({
                        link: 'feature_1.jpg',
                        title: 'Students',
                        description: 'Students description',
                        value: event.target.value
                    });
                case '1':
                    return this.setState({
                        link: 'feature_2.jpg',
                        title: 'Website',
                        description: 'Website description',
                        value: event.target.value
                    });
                case '2':
                    return this.setState({
                        link: 'feature_3.jpg',
                        title: 'Courses',
                        description: 'Courses description',
                        value: event.target.value
                    });
                case '3':
                    return this.setState({
                        link: 'feature_4.jpg',
                        title: 'Emails',
                        description: 'Mails description',
                        value: event.target.value
                    });
                case '4':
                    return this.setState({
                        link: 'feature_5.jpg',
                        title: 'Logs',
                        description: 'Logs description',
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

                        <br/>

                        <div className="content ThirdSectionButtonsArea">
                            <button className={this.state.title == 'Students' ? "button ThirdSectionButton ThirdSectionButtonActive title is-5" : "button ThirdSectionButton title is-5"} onMouseEnter={this.handleMouseEnter} value="0">Students</button>
                            <button className={this.state.title == 'Website' ? "button ThirdSectionButton ThirdSectionButtonActive title is-5" : "button ThirdSectionButton title is-5"} onMouseEnter={this.handleMouseEnter} value="1">Website</button>
                            <button className={this.state.title == 'Courses' ? "button ThirdSectionButton ThirdSectionButtonActive title is-5" : "button ThirdSectionButton title is-5"} onMouseEnter={this.handleMouseEnter} value="2">Courses</button>
                            <button className={this.state.title == 'Emails' ? "button ThirdSectionButton ThirdSectionButtonActive title is-5" : "button ThirdSectionButton title is-5"} onMouseEnter={this.handleMouseEnter} value="3">Emails</button>
                            <button className={this.state.title == 'Logs' ? "button ThirdSectionButton ThirdSectionButtonActive title is-5" : "button ThirdSectionButton title is-5"} onMouseEnter={this.handleMouseEnter} value="4">Logs</button>

                            <div class="columns FeaturesDescription has-text-centered">
                                <div class="column"><span className="FeaturesDescriptionText">{this.state.title == 'Students' ? this.state.description : ''}</span></div>
                                <div class="column"><span className="FeaturesDescriptionText">{this.state.title == 'Website' ? this.state.description : ''}</span></div>
                                <div class="column"><span className="FeaturesDescriptionText">{this.state.title == 'Courses' ? this.state.description : ''}</span></div>
                                <div class="column"><span className="FeaturesDescriptionText">{this.state.title == 'Emails' ? this.state.description : ''}</span></div>
                                <div class="column"><span className="FeaturesDescriptionText">{this.state.title == 'Logs' ? this.state.description : ''}</span></div>
                            </div>

                        </div>

                        <h2 className="subtitle is-3 has-text-centered">
                            {this.state.description}
                        </h2>

                        </div>
                    </section>

                </div>
            )
        }
    }

export default ThirdSection;