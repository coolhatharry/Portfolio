import React, { Component } from 'react';

const fullName = "Corey James Lee";
const jobTitle = "Software Engineer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="main">
                    <div className="name-text">
                        <div className="name">{fullName}</div>
                        <div className="job">{jobTitle}</div>
                    </div>
                </div>

                <div className="about-me">

                    {/* TODO add summary */}
                    {/*<div className="summary">*/}
                        {/*<p>*/}
                            {/*{summary}*/}
                        {/*</p>*/}
                    {/*</div>*/}

                    {/* TODO Add css for contact info */}
                    {/*<div className="contact">*/}
                        {/*<a href="https://github.com/coolhatharry">Github</a>*/}
                        {/*<a href="https://www.linkedin.com/in/corey-lee-46a3b370">Linkedin</a>*/}
                        {/*<a href="https://about.me/coreyjameslee">AboutMe</a>*/}
                    {/*</div>*/}
                </div>
                <style jsx global>{`
                    body {
                        margin: 0;
                    }
                `}</style>
                <style jsx>{`
                .app {
                  height: 100%;
                }

                .main {
                  background-image: url("../img/black-white-mountain.jpg");

                  /* Create the parallax scrolling effect */
                  background-attachment: fixed;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                  height: 100%;
                }

                .name-text {
                  text-align: center;
                  top: 40%;
                  left: 50%;
                  position: absolute;
                  -webkit-transform: translateY(-50%) translateX(-50%);
                  -ms-transform: translateY(-50%) translateX(-50%);
                  transform: translateY(-50%) translateX(-50%);
                  color: #1A1A1A;

                  /* Border Box */
                  border-style: solid;
                  border-width: 1px;
                  width: 250px;
                  line-height: 30px;
                  padding-top: 15px;
                  padding-bottom: 15px;
                }

                .name {
                  font-size: 20px;
                }

                .job {
                  font-size: 10px;
                }

                /* Line Arrow Down */
                .line-arrow {
                  position: absolute;
                  width: 24px;
                  height: 24px;
                  bottom: 20px;
                  left: 50%;
                  border-bottom: 1px solid #E9E9E9;
                  border-right: 1px solid #E9E9E9;
                  transform: translateY(-50%) translateX(-50%) rotate(45deg);
                }

                /* About Me Section */
                .about-me {
                  position: relative;
                  height: 100%;
                  background-color: #1A1A1A;
                  color: #E9E9E9;
                }
                `}</style>
            </div>
        );
    }
}

export default App;
