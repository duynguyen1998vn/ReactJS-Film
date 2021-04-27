import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {FormGroup,Input} from 'reactstrap';
import User from 'api/UserAPI';
import '../styles/form.css';

function FormSignUp() {

    const {register,handleSubmit,formState: {errors}} = useForm();
    const [flag,setFlag] = useState(false);
    const submitForm = (datas) => {
    
        const createUser = async () => {
                const result = await User.createUser(datas.account,datas.password);
                console.log(result);
                if(result.status === 200 && result.data === 1) {
                    alert("Sign Up Succes");
                    window.location.href = '/login';
                }else{
                    alert("Fail !!!!");
                    setFlag(true);
                    window.location.href = '/sign-up';
                };           
        }
        createUser();
    }

    return (
        <div className = 'div-form'>
            {flag === true  ? <h3 style={{color:'red'}}>Account Already Exists</h3> : <h3>Sign Up</h3>}
            <form onSubmit={handleSubmit(submitForm)} className='box-form'>
                <FormGroup>
           
                    <br></br>
                    <span>{errors.account && "Account Is Required"}</span> 
                    <Input placeholder="Your Account" {...register("account",{required:true})}/>
                    

                    <br></br>
                    <span> {errors.password && "Password Is Required"}</span>
                    <Input type="password" placeholder="Your Password" {...register("password",{require:true})}/>
                    

                    <br></br>
                    <Input id='btn-sign-up' type="submit" value="Sign Up" style={{width:'5em',display:'inline-block',float:'left'}}/>
                
                </FormGroup>
            </form>

        </div>
    );
}

export default FormSignUp;