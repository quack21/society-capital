import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';

function matchPsw(one: string, two: string) {
    if (one === two) {
        return false
    } else {
        return true
    }
}

export const SignUp = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [pasw1, setPasw1] = useState<string>('')
    const [pasw2, setPasw2] = useState<string>('')


    async function register (f: string, l: string, e: string, p: string) {

        const dataToSend = JSON.stringify({
            "firstName": f,
            "lastName": l,
            "email": e,
            "password": p
        })

        try {
            await fetch('https://society-capital.herokuapp.com/api/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: dataToSend
            })
              .then((res) => console.log(res.text()))

        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        Sign up
                    </div>
                    <div className={styles.form}>
                        <div className={styles.formOne}>
                            <input autoComplete='off' placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)}></input>
                            <input autoComplete='off' placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)}></input>
                        </div>
                        <div className={styles.formTwo}>
                            <input autoComplete='off' placeholder='E-mail' type='email' value={email} onChange={event => setEmail(event.target.value)}></input>
                        </div>
                        <div className={styles.formThree}>
                            <input autoComplete='off' placeholder='Password' type='password' value={pasw1} onChange={event => setPasw1(event.target.value)}></input>
                            <input autoComplete='off' placeholder='Repeat Password' type='password' value={pasw2} onChange={event => setPasw2(event.target.value)}></input>
                        </div>
                    </div>
                    {matchPsw(pasw1, pasw2) ? <div className={styles.match}>The entered passwords must match!</div> : <button onClick={() => register(firstName, lastName, email, pasw2)}>Submit</button>}
                    <hr></hr>
                    <div className={styles.haveAcc}>
                        <Link to='/login'><b>I already have an account!</b></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;