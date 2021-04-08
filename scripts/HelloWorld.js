import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ title }) => {
  return (
    <>
      <h5>React Component</h5>
      <p><strong>Title: {title}</strong></p>
    </>
  )
}

HelloWorld.propTypes = {
  title: PropTypes.string
}

export default HelloWorld
