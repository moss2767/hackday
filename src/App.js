import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Card from './components/Cards/Card'
import { Container } from '@material-ui/core'
import checkPassword from './logic'
import ConditionalCard from './components/Cards/ConditionalCard'
import SimpleExpansionPanel from './components/Cards/Explanation'

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
    search: async (e) => {
      e.preventDefault()
      setReturnValue(await checkPassword(pwdToCheck))
    }
  }
  return (
    <div>
      <Header />
      <Container className={classes.root}>
        <CssBaseline />
        <ConditionalCard {...returnValue}/>
        <Input helpers={helpers} pwdToCheck={pwdToCheck}/>
        <SimpleExpansionPanel query={pwdToCheck}/>
        <Card title='Test card' text='This is a boilerplate text about cryptography' />
        <Card heading='h4' title='k-anonymity' text='"Given person-specific field-structured data, produce a release of the data with scientific guarantees that the individuals who are the subjects of the data cannot be re-identified while the data remain practically useful."' />
      </Container>
    </div>
  )
}

export default App
