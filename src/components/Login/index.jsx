import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { useDispatch } from 'react-redux';
import { logUser, setUsername } from '../../redux/slices/loginSlice';


export const Login = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('')
    const [pasw, setPasw] = useState('')

    function getRefToken(text) {
        var refToken = text
        var a = text.indexOf('"refresh_token":"') + 17
        refToken = refToken.slice(a, -2)
        return refToken
    }

    function getAccToken(text) {
        var accToken = text
        var a = accToken.indexOf('"access_token":"') + 16
        accToken = accToken.slice(a, -1)
        var b = accToken.indexOf('"')
        accToken = accToken.slice(0 , b)
        return accToken
    }

    function prepareBody(e, p) {

        var logInfo = {
            'username': e,
            'password': p
        }

        var formBody = [];

        for (var key in logInfo) {
          var encodedKey = encodeURIComponent(key); // coding key & value to avoid unexpected errors
          var encodedValue = encodeURIComponent(logInfo[key]); 
          formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");

        return formBody
    }

    async function authorization(e, p) {
        var tokens = ''
        var authStatus = ''
        var formBody = prepareBody(e, p)
        try {
            await fetch('https://society-capital.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
              .then((response) => response.text())
              .then(rawTokens => tokens = rawTokens)

            if (tokens !== '') {
                localStorage.setItem('accToken', getAccToken(tokens))
                localStorage.setItem('refToken', getRefToken(tokens))
                localStorage.setItem('bearer', 'Bearer ' + localStorage.getItem('accToken'))
                try {
                    await axios({
                        method: 'GET',
                        url: 'https://society-capital.herokuapp.com/api/users',
                        headers: {
                            'Authorization': localStorage.getItem('bearer')
                        }
                    }).then(res => authStatus = res.status)
        
                    if (authStatus === 200) {
                        dispatch(setUsername(e))
                        dispatch(logUser(true))
                        console.log('Authorized')
                    } else {
                        console.log('Not Authorized, invalid tokens')
                    }
        
                } catch(err) {
                    console.log(err)
                }
            } else {
                console.log('Not Authorized, tokens are not here')
            }

        } catch(err) {
            console.log(err)
        }
    }
        

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        Sign in
                    </div>
                    <div className={styles.form}>
                        <input autoComplete='off' placeholder='Email' value={email} type='email' onChange={event => setEmail(event.target.value)}></input>
                        <input autoComplete='off' placeholder='Password' value={pasw} type='password' onChange={event => setPasw(event.target.value)}></input>
                    </div>
                    <button onClick={() => authorization(email, pasw)}>Submit</button>
                    <hr></hr>
                    <div className={styles.signUp}>
                        Don't have an account?
                        <Link to='/signup'><button>Sign up</button></Link>
                    </div>
                    <div className={styles.forgot}>
                        <Link to='/not-found'>Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;