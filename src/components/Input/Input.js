import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, TextField } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}))

export default function Input (props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <form className={classes.container} onSubmit={props.helpers.search} noValidate autoComplete="off">
        <TextField
          id="filled-required"
          className={classes.textField}
          label="Enter Password"
          type="password"
          margin="normal"
          variant="filled"
          onChange={props.helpers.handleChange}
          value={props.pwdToCheck}
        />
        <Button
          onClick={props.helpers.search}
          variant="contained"
          className={classes.button}>
        Check Password
        </Button>
      </form>
    </Card>
  )
}
