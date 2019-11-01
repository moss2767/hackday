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

export default function WarningCard (props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant='h3'>
          Bad news!
        </Typography>
        <Divider />
        <Typography component="p">
          Your password occurs in the database {props.props.count} times.
        </Typography>
      </CardContent>
    </Card>
  )
}
WarningCard.propTypes = {
  props: PropTypes.any
}
