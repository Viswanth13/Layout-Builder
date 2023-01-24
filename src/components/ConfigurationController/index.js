import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
            showContent,
            showLeftNavbar,
            showRightNavbar,
          } = value

          return (
            <div className="layout-top-container">
              <h1>Layout</h1>
              <ul className="inputs-container">
                <li className="each-input-container">
                  <input
                    type="checkbox"
                    id="Content"
                    defaultChecked
                    onChange={onToggleShowContent}
                    value={showContent}
                  />
                  <label htmlFor="Content">Content</label>
                </li>
                <li className="each-input-container">
                  <input
                    type="checkbox"
                    id="LeftNavBar"
                    defaultChecked
                    onChange={onToggleShowLeftNavbar}
                    value={showLeftNavbar}
                  />
                  <label htmlFor="LeftNavBar">Left Navbar</label>
                </li>
                <li className="each-input-container">
                  <input
                    type="checkbox"
                    id="RightNavBar"
                    defaultChecked
                    onChange={onToggleShowRightNavbar}
                    value={showRightNavbar}
                  />
                  <label htmlFor="RightNavBar">Right Navbar</label>
                </li>
              </ul>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
