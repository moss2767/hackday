import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper, TextField } from '@material-ui/core'
import checkPassword from '../logic'
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

export default function Input () {
  const classes = useStyles()
  const [input, setInput] = useState('')

  const handleChange = (event) => setInput(event.target.value)
  const search = () => {
    checkPassword(input)
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Paper className={classes.root}>
        <TextField
          id="filled-required"
          className={classes.textField}
          label="Enter Password"
          type="password"
          margin="normal"
          variant="filled"
          onChange={handleChange}
          value={input}
        />
        <Button
          onClick={search}
          variant="contained"
          className={classes.button}>
          Check Password
        </Button>
        <p>TESTING PURPOSES ONLY <br></br>
           Your password is: {input}
        </p>
      </Paper>
    </form>
  )
}
