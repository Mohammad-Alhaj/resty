import React from 'react';
import {useState,useEffect} from 'react'
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App (props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

 async function callApi  (requestParams){
    const response = await fetch(requestParams.url);
    const data = await response.json();              
    setData(data);
    setRequestParams(requestParams)
  }
  useEffect(()=>{
    setData(data)
    console.log('From use effect')
  },[data])
return (
  <>
  <Header />

        <p data-testid='method'>Request Method: {requestParams.method}</p>
       
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} method ={requestParams.method}/>
        <Footer />
  </>
)
}

export default App;
