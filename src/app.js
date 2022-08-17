import React from 'react';
import {useState,useEffect,useReducer} from 'react'
import History from './components/History/History';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App (props) {
 let initialize ={
    data: null,
     requestParams:[],
  }
const [state,dispatch] = useReducer(reducer,initialize)


function reducer (state =initialize,action) {
  switch (action.type) {
    case'data':
       return {
      ...state,
        data: action.payload,
      };
    case'Params':
       return {
       
        requestParams: action.payload,
      };
      default:
        return state;
 
  
  }
}
 async function callApi  (requestParams){

    const response = await fetch(requestParams.url);
    const data = await response.json();              
    dispatch({type:'data',payload:data})
    dispatch({type:'Params',payload:requestParams})
  }
  useEffect(()=>{
    dispatch({type:'data',payload:state.data})

  },[state.data])
return (
  <>
  <Header />

        <p data-testid='method'>Request Method: {state.requestParams.method}</p>
       
        <div>URL: {state.requestParams.url}</div>
        <History method={state.requestParams.method}/>
        <Form handleApiCall={callApi} />
        <Results data={state.data} method ={state.requestParams.method}/>
        <Footer />
  </>
)
}

export default App;
