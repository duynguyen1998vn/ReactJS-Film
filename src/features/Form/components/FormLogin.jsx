import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {FormGroup,Input, Button} from 'reactstrap';
import User from 'api/UserAPI';
import { Link } from 'react-router-dom';
import '../styles/form.css';


function FormLogin() {

    const {register,handleSubmit,formState: {errors}} = useForm();
    const [flag,setFlag] = useState(false);
   
    const submitForm = (datas) => {
    
        const checkUser = async () => {
                const result = await User.getIdUser(datas.account,datas.password);
               
                if(result.status === 200 && result.data !== null){
                    
                    localStorage.setItem('USER',JSON.stringify(result.data));
                  

                    window.location.href = '/';
                }else{
                    setFlag(true);
                    window.location.href = '/login';
                }
        }
        checkUser();      
    }

    return (
        <div className = 'div-form'>
            {flag === true  ? <h3 style={{color:'red'}}>Account Or Password WRONG</h3> : <h3>Login</h3>}
            <form onSubmit={handleSubmit(submitForm)} className='box-form'>
                <FormGroup>

                    <br></br>
                    <span>{errors.account && "Account Is Required"}</span> 
                    <Input className='input' placeholder="Your Account" {...register("account",{required:true})}/>
                   

                    <br></br>
                    <span> {errors.password && "Password Is Required"}</span>
                    <Input className='input' type="password" placeholder="Your Password" {...register("password",{required:true})}/>
                  
                    <br></br>

                    <Input id='btn-login' type="submit" value="Sign In"/>
                    <Link to='/sign-up'><Button color="info" style={{display:'inline-block',float:'right'}}>Sign Up</Button></Link>

                </FormGroup>
            </form>
        </div>
    );
}

export default FormLogin;