import axios from "axios"
import { useEffect } from "react"
const Useddata =()=>{
    let[value,setValue] =useState(0)
    let[count,setCount]= useState(0)

    //!useeffect with empty array of dependencies behavous like compunentDidmount()
    //useEffect(()=>{
    //console.log("side effects");
//},[])

//!useeffect with some value in array of dependencies will act like compponentDidMount()
useEffect(()=>{
    console.log("side effects");
},[value])
return(
    <div>
        <p>Value:{value}</p>
        <p>Count:{Count}</p>
        <button onClick={()=>setValue(valur+1)}>Change Value</button>
        <button onClick={(setCount(count+1))}>Change Count</button>
    </div>
)
}
export default Useddata;