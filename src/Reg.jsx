import axios from "axios"
import { useState } from "react"
function Reg()
{
    const[data,setdata]=useState(
        {
            username:"",
            email:"",
            password:""
        }
    )
    const changeName=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async()=>{
        try{
            const res= await axios.post(
                "https://newproject-backend-1.onrender.com/register",data
            )
            alert(res.data)
        }
        catch(xyz)
        {
            alert(xyz.response?.data || "Error")
        }
    }
    return(
        <>
        <h1>I am app</h1>
        <input onChange={changeName} name="username" placeholder="enter username"/>
        <input onChange={changeName} name="email" placeholder="enter email" type="email"/>
        <input onChange={changeName} name="password" placeholder="enter password" type="password"/>
        <button onClick={submit}>register</button>
        </>
    )
}
export default Reg