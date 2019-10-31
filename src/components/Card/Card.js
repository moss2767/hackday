/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }

}))
export default function Card (props) {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {props.title}
      </Typography>
      <Typography component="p">
        {props.text}
      </Typography>
    </Paper>
  )
}
