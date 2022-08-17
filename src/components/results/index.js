import React from 'react';
import './results.css'
import History from '../History/History';

function Results(props){
  
  
  
  return(
    <>
  <section>
<pre>

    {props.method === 'DELETE'||props.method === 'PUT'||props.method === "POST"?
    <div className='loading'>
  <div class="load-wrapp">
      <div class="load-3">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  
  
</div>
    
    :null}
{
props.method === "GET"  ? 
JSON.stringify(props.data,undefined,2):
null

}




</pre>

  </section>
  </>
)

}


export default Results;