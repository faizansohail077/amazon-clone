import React, { useReducer, useState } from 'react'
import { auth } from 'firebase';
import { Link, useHistory } from 'react-router-dom'
import './Login.css'


function Login() {



    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch((e) => {
                alert(e.message)
            })
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })

            .catch((e => {
                alert(e.message)
            }))

    }



    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />


            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    <h5>password</h5>
                    <input alue={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>

                </form>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate et beatae odit, non quod earum maiores perferendis ab impedit neque porro aspernatur possimus molestiae!</p>
                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
