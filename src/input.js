import React from 'react'
import { connect } from 'react-redux'

export class Input extends React.Component {
  render () {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input className="mb-s mx-sm-3" id="word-guess" type="text" placeholder="enter guess" data-test="input-box" />
        <button data-test="submit-button" className="btn btn-primary mb-2" type="submit">Submit</button>
      </form>
    )

    return (
      <div data-test="component-input">
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

export default connect(mapStateToProps)(Input)
