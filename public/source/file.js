import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from './firebaseAuth'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useStateValue } from './StateProvider';



function Login  () {
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth= getAuth();

  const signIn = (e) => {
    console.log(auth)
    e.preventDefault()
    signInWithEmailAndPassword(email, password, auth)
    .then(auth => {
      if(auth){
        navigate("/")
      }
    })
    .catch(error => alert (error.message));

    // some fancy firebase login here
  }
  const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(email, password, auth)
    .then(auth => {
      if(auth){
        navigate("/")
      }
    })
    .catch(error => alert (error.message));
    
  }



  return (
    <div className='login'>
    <Link to='/'>
     <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
    </Link>
    <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
            <h5>E-mail</h5>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password"value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' onClick={signIn} className='login__signInButton'>Sign in</button>
        </form>

        <p>
            By signing-in you agree to Amazon's Fake Clone condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and Our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
    </div>

    </div>
  )
}

export default Login
const [{}, dispatch] = useStateValue(); 
const auth= getAuth();

useEffect(()=>{
//  will only run once when the app component loads.....

 auth.onAuthStateChanged(authUser => {
  console.log('THE USER IS >>>' , authUser);

  if (authUser){
    // the user just logged in / the user was logged in
  dispatch({
    type: 'SET_USER',
    user: authUser
  })
  }
  else{
    // the user is logged out
  dispatch({
    type: 'SET_USER',
    user:null
  })
  }
 })
}, [])