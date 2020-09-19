import React from 'react';
import './BasePage.css';

export default class BasePage extends React.Component {
  render() {
    return (
      <div className="text-center bg-white">
       <p>{this.pageName} - section is under construction</p>
      </div>
    );
  }
}