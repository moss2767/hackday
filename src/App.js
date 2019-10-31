import React, { useEffect, useState } from 'react';
import './App.css';
import sha1 from 'js-sha1'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, Toolbar, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
root: {
  flexGrow: 1,
},
button: {
  margin: theme.spacing(1),
}
}))

const hash = sha1('hunter2').toUpperCase();
const hashPrefix = hash.substring(0, 5);
const hashSuffix = hash.substring(5);

const search = (body, hash) => {
  const result = {pwned: false, count: 0};

  // Every password hash is followed by a colon (:) and the password count
  const pattern = new RegExp(hash + ':(\\d+)');
  const match = body.match(pattern);
  if (match) {
    result.pwned = true;
    result.count = match[1];
  }
  // console.log(result)
  return result;
};

function App() {
  const classes = useStyles()

  const [pwned, setPwned] = useState('click')

  
  const result = fetch('https://api.pwnedpasswords.com/range/' + hashPrefix)
    .then(response => response.text())
    .then(body => search(body, hashSuffix))
    .catch(error => console.log('ERR', error))
  
  // useEffect(() => {
  //   const pwned = fetch('https://api.pwnedpasswords.com/range/' + hashPrefix)
  //   .then(response => response.text())
  //   .then(body => search(body, hashSuffix))
  //   .catch(error => console.log('ERR', error)) 
  // })

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h2" color="inherit">
            Hackday App
          </Typography>
        </Toolbar>
      </AppBar>
      <Button onClick={() => setPwned(result.toString())} variant="contained" className={classes.button}>
        {pwned}
      </Button>
      <p>{pwned}</p>
    </div>
  );
}


export default App;
