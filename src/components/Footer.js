import React, { Component } from 'react';
import netlify from '../../content/images/netlify.png';
import gatsby from '../../content/thumbnails/gatsby.png';
import github from '../../content/images/github6.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div />
        <div>
          <a href="https://www.netlify.com/" title="Hospedado pela Netlify" target="_blank">
            <img
              src={netlify}
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Construído com Gatsby" target="_blank">
            <img
              src={gatsby}
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>
    );
  }
}
