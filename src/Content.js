import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import SizeChange from './SizeChange'
import { connect } from './react-redux'

class Content extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    fontSize: PropTypes.string
  }

  render () {
    const pStyle = {
      color: this.props.themeColor,
      fontSize: this.props.fontSize
    }
    return (
      <div>
        <p style={pStyle}>React.js 小书内容</p>
        <ThemeSwitch />
        <SizeChange />
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
Content = connect(mapStateToProps)(Content)

export default Content