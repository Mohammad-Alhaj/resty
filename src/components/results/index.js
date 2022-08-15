import React from 'react';
import './results.css'


function Results(props){
  
  
  
  return(
    <>
  <section>
<pre>

    {props.method !== 'GET'?
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