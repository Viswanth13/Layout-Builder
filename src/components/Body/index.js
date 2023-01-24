import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value

          return (
            <div className="body-container">
              {showLeftNavbar && (
                <div className="left-navbar-container">
                  <h2>Left Navbar Menu</h2>
                  <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                  </ul>
                </div>
              )}
              {showContent && (
                <div className="content-container">
                  <h2>Content</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod, turpis a consectetur dictum, ligula urna molestie
                    nisi, ac posuere lorem libero et magna. Nullam vehicula
                    velit non convallis commodo. Cras quis eros ligula. Donec
                    tellus felis, egestas non purus vitae, dictum facilisis
                    ligula. Nam ultricies iaculis ultricies.
                  </p>
                </div>
              )}

              {showRightNavbar && (
                <div className="right-navbar-container">
                  <h2>Right Navbar</h2>
                  <div className="right-nav-box">Ad 1</div>
                  <div className="right-nav-box">Ad 2</div>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
