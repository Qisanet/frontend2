import  { useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();
    const {enqueueSnackbar}=useSnackbar();
    const handleLogin=()=>{
      axios
      .post('https://backend-loaw.onrender.com/user/signin',{username,password})
      .then(response=>{
        const {username}=response.data;
        console.log('Username:',username);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('user',response.data.username)
        enqueueSnackbar('Login successful',{variant:'success'});
        navigate('/home',{state:{username}});
      })
      .catch(error=>{
        enqueueSnackbar('Login failed',{ variant:'error'});
        console.log(error);
      });
    };
  return (
    <div className='p-4'>
      <h1 className='mx-4 my-4'>signin </h1>
      <div className='p-4'>
        <div className='my-4'>
          <label className='mx-3 mr-4'>username</label>
          <input type="text"
                  value={username}
                  onChange={e=>setUsername(e.target.value)} 
                  className='px-4 py-2'/>
        </div>
        <div className='my-4'>
          <label className='mx-3 mr-4'>Password</label>
          <input type="text"
                 value={password}
                 onChange={e=>setpassword(e.target.value)} 
                 className='px-4 py-2'/>

        </div>
        <button className='btn btn-primary mx-4 my-2 p-2' style={{width:300}} onClick={handleLogin}>signin</button>
        <div>
          <p className='mx-4'>Do not have an account <Link to='/signup'>Sign up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login