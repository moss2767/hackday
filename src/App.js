import React, { useState } from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Card from './components/Card/Card'
import { Container } from '@material-ui/core'
import checkPassword from './logic'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}))

const App = () => {
  const classes = useStyles()

  const [pwdToCheck, setPwdToCheck] = useState('')

  const [returnValue, setReturnValue] = useState('')

  const helpers = {
    handleChange: (event) => setPwdToCheck(event.target.value),
    search: async () => setReturnValue(await checkPassword(pwdToCheck))
  }
  return (
    <Container className={classes.root}>
      <Header />
      <Input helpers={helpers} pwdToCheck={pwdToCheck}/>
      <h1> { returnValue.count ? (`Your password occurs in the database ${returnValue.count} times.`) : ''}</h1>
      <Card title='Test card' text='This is a boilerplate text about cryptography' />
      <Card title='k-anonymity' text='"Given person-specific field-structured data, produce a release of the data with scientific guarantees that the individuals who are the subjects of the data cannot be re-identified while the data remain practically useful."' />
    </Container>
  )
}

export default App
