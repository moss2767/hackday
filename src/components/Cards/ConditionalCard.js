import React from 'react'
import PropTypes from 'prop-types'
import WarningCard from './WarningCard'
import SuccessCard from './SuccessCard'
const ConditionalCard = (props) => {
  if ('compromised' in props) {
    const compromised = props.compromised
    if (compromised) {
      return <WarningCard props={props} />
    }
    return <SuccessCard />
  }
  return null
}
ConditionalCard.propTypes = {
  compromised: PropTypes.bool
}
export default ConditionalCard
