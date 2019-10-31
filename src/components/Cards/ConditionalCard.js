import React from 'react'
import Card from './Card'
import WarningCard from './WarningCard'
const ConditionalCard = (props) => {
  if ('compromised' in props) {
    if (props.compromised) {
      return (
        <WarningCard props={props} />
      )
    } else {
      return (
        <Card title={'Good news!'} text={'Your password does not occur in the database'}/>
      )
    }
  } else {
    return null
  }
}

export default ConditionalCard
