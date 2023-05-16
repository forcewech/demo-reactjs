import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import fetchUser from '../../redux/action/userAction';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
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
    setIsLoading(true);
    //submit apis
    let data = await postLogin(email, password);
    if(data && data.EC === 0){
        dispatch(fetchUser(data))
        toast.success(data.EM);
        setIsLoading(false);
        navigate('/')
      }
      if(data && data.EC !== 0){
        toast.error(data.EM);
        setIsLoading(false);
      }
  }
  const navigateRegister = () => {
    navigate('/register')
  }
  return (
    <div className='login-container'>
        <div className='header'>
            <span>Don't have an account yet?</span>
            <button onClick={navigateRegister}>Sign up</button>
        </div>
        <div className='title col-4 mx-auto'>HoiDanIT</div>
        <div className='welcome col-4 mx-auto'>Hello, who's this?</div>
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
            <span className='forgot-password'>Forgot password ?</span>
            <div>
                <button 
                disabled={isLoading}
                className='btn-submit'
                onClick={() => handleLogin()}
                >Login to HoiDanIT</button>
            </div>
            <div className='back text-center' style={{cursor: 'pointer'}}>
                <span onClick={() => {navigate('/')}}>&#60;&#60; Go to Hompage</span>
            </div>
        </div>
    </div>
  )
}

export default Login