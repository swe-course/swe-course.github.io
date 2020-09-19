import React from 'react';
import './Footer.css';
import FB from '../../media/fb.png';
import Github from '../../media/github.png';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="mt-auto bg-light pb-1 text-left border-top">
        <a href="https://github.com/swe-course" target="_blank" without rel="noopener noreferrer" className="pl-2 float-left"><img src={Github} class="Footer__logo img-fluid" alt=""/></a>
        <a href="https://www.facebook.com/swecourse" target="_blank" without rel="noopener noreferrer" className="pl-2 float-left"><img src={FB} class="Footer__logo img-fluid" alt=""/></a>
        <small className="text-secondary pr-2 mt-1 float-right">{this.props.version}</small>
      </footer>
    );
  }
}
