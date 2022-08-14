import React from 'react';



function Results(props){
  console.log(props.method)

let post ={
  status:'You update successfully'
}
return(
  <>
  <section>
<pre>

{
props.method === "GET"  ? 
JSON.stringify(props.data,undefined,2):
null

}
{props.method === 'POST'? <div>{post.status}</div>:null}

</pre>

  </section>
  </>
)

}


export default Results;
