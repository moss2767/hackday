import React, { Component} from 'react';
import './App.css';
import sha1 from 'js-sha1'

const hash = sha1('hunter2').toUpperCase();
const hashPrefix = hash.substring(0, 5);
const hashSuffix = hash.substring(5);

const search = (body, hash) => {
  const result = {pwned: false, count: 0};

  // Every password hash is followed by a colon (:) and the password count
  const pattern = new RegExp(hash + ':(\\d+)');
  console.log(pattern)
  const match = body.match(pattern);
  console.log(match)
  if (match) {
    result.pwned = true;
    result.count = match[1];
  }
  console.log(result)
  return result;
};

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch('https://api.pwnedpasswords.com/range/' + hashPrefix)
    .then(response => response.text())
    .then(body => search(body, hashSuffix))
    .catch(error => console.log('ERR', error)) 
  }

  render() {

    return (
      <div className="App"> TEST RESULT IN CONSOLE</div>
  );
}
}

export default App;
