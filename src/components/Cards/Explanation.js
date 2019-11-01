import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const sha1 = require('js-sha1')

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium
  }
}))
const hashQuery = query => {
  if (query.length >= 1) {
    const hash = sha1(query).toUpperCase()
    const hashToSend = hash.substring(0, 5)
    const hashToVerify = hash.substring(5)
    return {
      hash: 'Result of SHA-1 encryption: ' + hash,
      prefix: 'Substring that is sent to the server: ' + hashToSend,
      suffix: 'What we keep for ourselves: ' + hashToVerify,
      sample: <div>
        <p>Sample of server response: <em>(actual response is ~40kB)</em></p>
        <p>1D2DA4053E34E76F6576ED1DA63134B5E2A<b>:2</b></p>
        <p>1D72CD07550416C216D8AD296BF5C0AE8E0<b>:10</b></p>
        <p>1E2AAA439972480CEC7F16C795BBB429372<b>:1</b></p>
        <p>1E3687A61BFCE35F69B7408158101C8E414<b>:1</b></p>
        <p><em>1E4C9B93F3F0682250B6CF8331B7EE68FD8</em><b>:3730471</b></p>
        <p>1F2B668E8AABEF1C59E9EC6F82E3F3CD786<b>:1</b></p>
      </div>

    }
  }
  return {
    hash: 'Waiting for input',
    prefix: '',
    suffix: '',
    sample: ''
  }
}

export default function SimpleExpansionPanel (props) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const dataObj = hashQuery(props.query)
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Live Demo</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component='div'>
            <h4>Input: {props.query}</h4>
            <h4>{dataObj.hash}</h4>
            <h4>{dataObj.prefix}</h4>
            <h4>{dataObj.suffix}</h4>
            <div>{dataObj.sample}</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Is this secure?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component='div'>
            <p>
            Yes. While we are querying a database over the internet,
            your password is never sent to the server, and the server sends a collection of the entire hashed matches back.
             This means that even on an unsecure network a potential attacker can never identify your hashed password in communications between you and the server.
            From your end, the attacker only sees the first <em>5</em> characters, and the response from the server contains hundreds of partial matches.
            </p>
            <p>
              While storing these partial matches, prepending the query, and breaking the resulting hashes is possible, the cost of such an attack
               (in terms of rented processing power) is out of reach of most attackers. <b>Besides, these passwords are already compromised and therefore not secure</b>
            </p>
            <p>
              The database we&apos;re checking against contains over <b>30GB</b> of passwords.
              Downloading all of that data to check offline isn&apos;t feasible.
            </p>
            <p>
            By making use of a mathematical property called <em>k-anonymization</em> we can query the server anonymously.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>How does this work?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component='div'>
            <p>The password is hashed locally using <a href='https://en.wikipedia.org/wiki/SHA-1'>SHA-1</a>,
             a cryptographic hashing function which returns a 40-digit hexadecimal number, regardless of the length of the input.
             We then split the string in two. One 5-character string, that we send to the server, and one 35-character string we keep to ourselves.</p>
            <p>The server finds all hashes that start with the same five characters, and returns the corresponding 35-character strings.
              This response is hundreds of lines long, and we check it locally.</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

SimpleExpansionPanel.propTypes = {
  query: PropTypes.string
}
