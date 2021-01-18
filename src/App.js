import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [apiData,_setApiData] = React.useState({})

  const FetchData = ()=>{
   axios.get('https://api.github.com/orgs/octokit/repos').then(data=>{
      _setApiData({...data.data})
   })
  }
  return (
    <div className="App">
  <h1>{JSON.stringify(apiData)}</h1>
  <button onClick={FetchData}>Fetch DAta</button>
    </div>
  );
}

export default App;
