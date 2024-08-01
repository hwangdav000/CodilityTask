import './task1.css';
import React, { Component } from 'react';

export default class TaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <div class="navbar">Home Blog Docs</div>
        <div class="sidebar">Home Blog Docs</div>
        <div class="hero">Hello to my site!</div>
        <div class="content">Lorem ipsum...</div>
        <div class="footer">Copyright © 2021 by me :)</div>
      </div>
    );
  }
}
