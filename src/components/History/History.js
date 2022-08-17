import { useState ,useEffect} from "react";
export default function History ({method}){
  
        const [methods,setMethod] = useState([])
        const [show,setShow] = useState(false)
       useEffect(()=>{
        console.log('it is work or not');
        setMethod([...methods,method])
       },[method])
 

    return(
<>

<button onClick={ ()=>setShow(!show) }> History</button>
   {show ? methods.map(ele=> <h1>{ele}</h1>) :null}


</>
    )
}