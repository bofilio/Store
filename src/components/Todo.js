import React,{useEffect} from 'react'
import axios from 'axios'

const Todo = ({token}) => {
    useEffect(() => {  
        if(token){
            fetchData(token);
        }   
    }, [token])

    const fetchData=async(token)=>{
        const result= await axios.get("http://localhost:5000/todo/list",{
            headers:{
                authorization: 'Bearer '+token,
            }
        }
        );
        console.log(result.data);
    }

    return (
        <div style={{margin:"20px"}}>
            you are looged in 
        </div>
    )
}

export default Todo
