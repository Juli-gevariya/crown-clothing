import React from "react";
import signInForm from '../../components/signin/sign-in.component';

const SignInAndSignUp = () => {
    return(
        <div className="sign-in-adn-sign-up">
            {
                <signInForm />
            }   
        </div>
    )
}

export default SignInAndSignUp; 