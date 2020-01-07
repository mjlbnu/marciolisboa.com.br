import React, { Component } from 'react';
import imagem from '../../content/images/pc.jpg';
import linkedin from '../../content/thumbnails/linkedin.svg';
import github from '../../content/thumbnails/github.png';

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src="https://avatars0.githubusercontent.com/u/46792997?v=4" alt="Marcio" />
            </div>
            <div>
              <p>
                Olá, eu sou Marcio José Lisboa.{' '}
                <strong>
                  Espero que de alguma forma este conteúdo tenha ajudado você
                  ;-)
                </strong>
              </p>

              <div className="flex">
                <a
                  className="linkedin-button"
                  href="https://www.linkedin.com/in/mjlbnu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} height="50" width="50" alt="Linkedin" />
                </a>
                <a
                  className="github-button"
                  href="https://github.com/mjlbnu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} height="50" width="50" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
