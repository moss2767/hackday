import React from 'react'
import SimpleCard from './Card'
import PropTypes from 'prop-types'

export default function WarningCard (props) {
  return (
    <SimpleCard heading='h3' title={'Bad news!'} text={`Your password occurs in the database ${props.props.count} times.`}/>
  )
}
WarningCard.propTypes = {
  props: PropTypes.any
}
