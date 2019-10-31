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

export default function SuccessCard (props) {
  const classes = useStyles()
  return (
    <Card className='warning'>
      <CardContent>
        <Typography className={classes.title} variant='h3'>
          {'Good news!'}
        </Typography>
        <Typography component="h5">
          {'Your password does not occur in the searched database.'}
        </Typography>
        <Typography component="p">
          {'This does not neccessarily mean your password is secure.'}
        </Typography>
      </CardContent>
    </Card>
  )
}
SuccessCard.propTypes = {
  props: PropTypes.any
}
