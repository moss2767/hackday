import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2)
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  pos: {
    marginBottom: 12
  },
  warning: {
    backgroundColor: red
  }
}))

export default function WarningCard (props) {
  const classes = useStyles()
  return (
    <Card className='warning'>
      <CardContent>
        <Typography className={classes.title} variant='h3'>
          {'Bad news!'}
        </Typography>
        <Typography component="p">
          {`Your password occurs in the database ${props.props.count} times.`}
        </Typography>
      </CardContent>
    </Card>
  )
}
WarningCard.propTypes = {
  props: PropTypes.any
}
