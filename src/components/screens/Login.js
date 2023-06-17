import React,{useState,useEffect} from 'react'
import './Loginn.css'
import {auth,provider} from "../../firebass"
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './Profile'

function Login() {
    const [value, setvalue] = useState('')
    const handleclick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
                setvalue(data.user.email)
                localStorage.setItem("email",data.user.email);
        })
    }

    useEffect(() => {
     setvalue(localStorage.getItem('email'))
    
     
    })
    

  return (
    <div style={{
        backgroundColor: "#0a1929",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        height: "100vh",
        
    }} >
        {value?<Home/>:

        
            <button style={{
                display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#db4437',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer'
            }} onClick={handleclick}>
            <i className='fab fa-google' style={{marginRight: '10px', height: '10px'  }}></i>Sign in with Google </button>
}  
           
        
    </div>
  )
}

export default Login