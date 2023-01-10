import React from "react";
import {useState,useEffect} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

const SignInForm = () => {
    const [userdata,setUserdata] = useState({
        'email' : '',
        'password' : ''
    });

    // useEffect(() => {   
    //     setUserdata();
    // },[userdata.email,userdata.password]);

    const handleChange = e => {
        setUserdata({...userdata, [e.target.name]: e.target.value})
    }

    const handleSubmit = event => {
        event.preventdefault();
        setUserdata();
    }

    // console.log(userdata);
    // const {email,password} = ""; 

    return(
        <div className="sign-in">
            <h1>I am Already Sign Up</h1>
            <span>Please Enter Valid Email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type='email' name="email" value={userdata.email} handleChange={handleChange} label='Email' required />
                <FormInput type='password' name="password" value={userdata.password} handleChange={handleChange} label='Password' required/>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
            </form>
        </div>
    )
}

export default SignInForm;