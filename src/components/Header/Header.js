import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  }
}))

export default function Header () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
              Hackday App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
