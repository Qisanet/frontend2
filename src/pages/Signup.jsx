
import  { useState } from "react";
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom';
import {enqueueSnackbar, }from 'notistack'


const SignUp = () => {
    const [username,setUsername]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();
    const handleSignup=()=>{
        axios
        .post('https://backend-loaw.onrender.com/user/signup',{username,email,password})
        .then(()=>{
            enqueueSnackbar('sign up successful',{variant:'success'});
            navigate('/');
        })
        .catch(error=>{
            enqueueSnackbar('sign up failed',{variant:'error'});
            console.log(error);
        });
    };
  return (
    <div className="p-4">
        <h1 className="mx-4 my4">sign up</h1>
        <div className="p-4">



         <div className="my-4">
            <label className="mx-3 mr-4">user name</label>
            <input type="text"
                   value={username}
                   onChange={e=>setUsername(e.target.value)}
                   className="px-4 py-2"/>
         </div>
         <div className="my-4">
            <label className="mx-3 mr-4">Email</label>
            <input type="email"
                   value={email}
                   onChange={e=>setemail(e.target.value)}
                   className="mx-3 px-4 py-2"/>
         </div>
         <div className="my-4">
            <label className="mx-3 mr-4">Password</label>
            <input type="password"
                   value={password}
                   onChange={e=>setpassword(e.target.value)}
                   className="px-4 py-2"/>
         </div>
         <button className="btn btn-primary mx-4 my-2 p-2" style={{width:300}}onClick={handleSignup}>Sign up</button>
         <div>
          <p className="mx-4">Already have an account?<Link to={'/'}>login</Link></p>
          </div>
        </div>
      
    </div>
  )
}

export default SignUp