import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class SizeChange extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    onChangeSize: PropTypes.func
  }

  handleChangeSize (type) {
    if (this.props.onChangeSize) {
      this.props.onChangeSize(type)
    }
  }

  render () {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleChangeSize.bind(this, 'plus')}>
          +
        </button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleChangeSize.bind(this, 'reduce')}>
          -
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor,
    fontSize: state.fontSize
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeSize: type => {
      dispatch({
        type: 'CHANGE_SIZE',
        fontSize: type
      })
    }
  }
}

SizeChange = connect(mapStateToProps, mapDispatchToProps)(SizeChange)

export default SizeChange