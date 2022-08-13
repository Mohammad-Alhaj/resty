import React from 'react';
import {useState} from 'react'
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App (props) {
  const [state,setState] = useState({data:null,requestParams:{}})
  function callApi (requestParams){
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setState({data, requestParams});
  }
return (
  <>
  <Header />
        <div data-testid='method'>Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={state.data} />
        <Footer />
  </>
)
}

export default App;
