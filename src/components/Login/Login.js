import React from 'react';
import Auth from './useAuth';
import { faStrikethrough, faWindowRestore } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
        auth.signInWithGoogle()
        .then(res =>{
            window.location.pathname = '/review'
        })
    } 
    const handleSignOut = () =>{
        auth.signOut()
        .then(ress =>{
            window.location.pathname = '/';
        });
    }
    return (
        <div>
            <h1>login here</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Sign out</button>:<button onClick={handleSignIn}>Sign in with google </button>
            }
            
        </div>
    );
};



export default Login;
