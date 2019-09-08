import React from 'react';

    class FourthSection extends React.Component {
        constructor() {
            super()
            this.state = {
                link: 'header.svg',
                title: 'Follow the information',
                subtitle: 'Everything you need to know about your website is just a click away',
                value: 0
            }
            this.handleClick = this.handleClick.bind(this)
        }

        handleClick(event) {
            switch(event.target.value){
                case 0:
                    return this.setState({
                        link: 'header.svg',
                        title: 'Follow the information',
                        subtitle: 'Everything you need to know about your website is just a click away',
                        value: event.target.value
                    });
                case 1:
                    return this.setState({
                        link: 'mobile.svg',
                        title: 'We are accessible',
                        subtitle: 'Check how things are going from anywhere',
                        value: event.target.value
                    });
                case 2:
                    return this.setState({
                        link: 'hardwork.svg',
                        title: 'Let our system do the hard work',
                        subtitle: 'You can focus on what really matter then',
                        value: event.target.value
                    });
                case 3:
                    return this.setState({
                        link: 'student.svg',
                        title: 'Your students are going to love it',
                        subtitle: 'Easier, faster and better than any other service',
                        value: event.target.value
                    });
                case 4:
                    return this.setState({
                        link: 'peopleUsingPc.svg',
                        title: 'Also made for your business',
                        subtitle: 'Easier, faster and better than any other service',
                        value: event.target.value
                    });
            }
        }

        render(){ 

            return (
                <div>
                    <section className="hero is-medium is-bold fourthSection">
                        <div className="hero-body">
                            <div className="columns">
                                <div className="column fouthSectionLeft is-half">
                                    <figure className="image is-16by9">
                                        <img className="ThirdSectionImage" src={require('../images/'+this.state.link)} />
                                    </figure>
                                </div>
                            <div className="column fouthSectionMiddle"><h1 className="title is-1">
                                    {this.state.title}
                                </h1>
                                <h2 className="subtitle is-3">
                                    {this.state.subtitle}
                                </h2></div>
                                <div className="column fouthSectionRight">
                                    <ul>
                                        <li className="fourthSectionRightItem" onMouseEnter={this.handleClick} value="0">
                                            NUMBERS
                                        </li>
                                        <li className="fourthSectionRightItem" onMouseEnter={this.handleClick} value="1">
                                            ANYWHERE
                                        </li>
                                        <li className="fourthSectionRightItem" onMouseEnter={this.handleClick} value="2">
                                            FOCUS
                                        </li>
                                        <li className="fourthSectionRightItem" onMouseEnter={this.handleClick} value="3">
                                            STUDENT
                                        </li>
                                        <li className="fourthSectionRightItem" onMouseEnter={this.handleClick} value="4">
                                            BUSINESS
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }

    }

export default FourthSection;