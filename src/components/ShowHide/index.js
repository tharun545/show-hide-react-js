// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  onFirstName = () => {
    const {isFirstNameVisible} = this.state
    if (isFirstNameVisible === true) {
      this.setState({isFirstNameVisible: false})
    } else {
      this.setState({isFirstNameVisible: true})
    }
  }

  onLastName = () => {
    const {isLastNameVisible} = this.state
    if (isLastNameVisible === true) {
      this.setState({isLastNameVisible: false})
    } else {
      this.setState({isLastNameVisible: true})
    }
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="first-and-last-name-container">
            <button className="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {isFirstNameVisible ? (
              <div className="name-div-container">Joe</div>
            ) : null}
          </div>

          <div className="first-and-last-name-container">
            <button className="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isLastNameVisible ? (
              <div className="name-div-container">Joans</div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
