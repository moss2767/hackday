import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2)
  },
  card: {
    minWidth: 275
  },
  title: {
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  pos: {
    marginBottom: 12
  }
}))

export default function SuccessCard (props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant='h3'>
          Good news!
        </Typography>
        <Divider />
        <Typography component="h5">
          Your password does not occur in the searched database.
        </Typography>
        <Typography component="p">
          This does not neccessarily mean your password is secure.
        </Typography>
      </CardContent>
    </Card>
  )
}
SuccessCard.propTypes = {
  props: PropTypes.any
}
