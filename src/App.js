import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Card from './components/Card/Card'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Input />
      <Card title='Test card' text='This is a boilerplate text about cryptography' />
    </div>
  )
}

export default App
