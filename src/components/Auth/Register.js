import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import './Register.scss'
const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState("");
    const navigate = useNavigate();
    const handleRegister = async () => {
    //validate
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const isValidEmail = validateEmail(email)
        if(!isValidEmail){
          toast.error('Invalid email')
          return;
        }
        if(!password){
          toast.error('Invalid password')
          return;
        }
        let data = await postRegister(email,password,username);
        if(data && data.EC === 0){
            toast.success(data.EM)
            navigate('/login')
        }
        else{
            toast.error(data.EM)
        }
    }
    const navigateLogin = () => {
        navigate('/login')
      }
    return (
        <div className='login-container'>
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={navigateLogin}>Log in</button>
            </div>
            <div className='title col-4 mx-auto'>HoiDanIT</div>
            <div className='welcome col-4 mx-auto'>Register</div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group mx-auto'>
                    <label>Email</label>
                    <input 
                    type={"email"} 
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input 
                    type={isShowPassword ? "text" : "password"}
                    className="form-control" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowPassword ? 
                   <span className='icons-eye' onClick={() => setIsShowPassword(false)}>
                    <VscEye></VscEye>
                   </span> 
                   :
                   <span className='icons-eye' onClick={() => setIsShowPassword(true)}>
                    <VscEyeClosed></VscEyeClosed>
                   </span>
                   }
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input 
                    type={"text"} 
                    className="form-control" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div>
                    <button 
                    className='btn-submit' onClick={() => handleRegister()}
                    >Register</button>
                </div>
                <div className='back text-center' style={{cursor: 'pointer'}}>
                    <span onClick={() => {navigate('/')}}>&#60;&#60; Go to Hompage</span>
                </div>
            </div>
        </div>
    )
}

export default Register