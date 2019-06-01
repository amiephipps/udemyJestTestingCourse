import React from 'react'
import { connect } from 'react-redux'

import { guessWord } from './actions'

export class UnconnectedInput extends React.Component {
  inputBox = React.createRef()

  submitGuessedWord = e => {
    e.preventDefault()

    const guessedWord = this.inputBox.current.value

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord)
    }

    this.inputBox.current.value = ''
  }

  render () {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          ref={this.inputBox}
          className="mb-s mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
          data-test="input-box" />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={this.submitGuessedWord}
        >Submit</button>
      </form>
    )

    return (
      <div data-test="component-input" id='hello'>
        { content }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return {
    success
  }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)
