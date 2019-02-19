import React from 'react'
import { connect } from 'react-redux'

class Input extends React.Component {
  render () {
    return (
      <div>
        hi
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(Input)
