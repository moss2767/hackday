/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

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
export default function SimpleCard (props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant={props.heading || 'h5'}>
          {props.title}
        </Typography>
        <Typography component="p">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  )
}
