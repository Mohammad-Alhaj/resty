import React from 'react';
import {useState} from 'react'

import './form.scss';


function Form(props){

const [method,setMethod] =useState('GET')
const [url,setUrl] =useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method:method,
      url:url,
      // url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);

  }
  

      function handleUrl (e){
        e.preventDefault()
        console.log('e.target.value',e.target.value);
        setUrl(e.target.value)
      }
  return(
    <>
     <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input  name='url' type='text'  onChange={handleUrl}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <button data-testid='GET' onClick={()=>setMethod('GET')}>GET</button>
            <button  data-testid='POST'onClick={()=>setMethod('POST')}>POST</button>
            <button data-testid='PUT' onClick={()=>setMethod('PUT')}>PUT</button>
            <button data-testid='DELETE'onClick={()=>setMethod('DELETE')}>DELETE</button>
          </label>
            <div>URL : https://pokeapi.co/api/v2/pokemon </div>
          {(method === 'PUT' || method === 'POST')?
            <textarea name="textarea"
            rows="7" cols="30">Mohammad</textarea>:null
}
        </form>
  </>
)
}

export default Form;
