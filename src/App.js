import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import './App.css';
import profile from '../img/profile.jpg' // relative path to image 

configureAnchors({scrollDuration: 1000})

const fullName = "Corey James Lee";
const jobTitle = "Software Engineer";
const summary = "Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.";


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="name-text">
            <div className="name">{fullName}</div>
            <div className="job">{jobTitle}</div>
          </div>
          <a className="line-arrow" href="#about-me-section"></a>
        </div>

        <ScrollableAnchor id={'about-me-section'}>
          <div className="about-me">
            <div className="profile">
              <img src={profile} alt="Profile"></img>
            </div>

            <div className="summary">
              <p>
                {summary}
              </p>
            </div>

            <div className="contact">
              <a href="https://github.com/coolhatharry">Github</a>
              <a href="https://www.linkedin.com/in/corey-lee-46a3b370">Linkedin</a>
              <a href="https://about.me/coreyjameslee">AboutMe</a>
            </div>

            <div className="love">
              made with&nbsp;
              <span className="heart"></span> 
              &nbsp;in montreal
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
