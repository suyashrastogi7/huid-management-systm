import React, {useState} from 'react'

//Components

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleLogin = async () => {
        await fetch('localhost:5000/login', { 
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                username : username,
                password : password
            }) // body data type must match "Content-Type" header
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
    }

    const handleSignup = async () => {
        await fetch('localhost:5000/signup', { 
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                username : username,
                password : password
            }) // body data type must match "Content-Type" header
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
    }

    return(
        <div>
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                {isLogin ? <form onSubmit={handleLogin} className="box">
                                    <div className="field">
                                        <label className="label">Username</label>
                                        <div className="control has-icons-left">
                                            <input type="email" placeholder="e.g. patharia_jewellers" value={username} onChange={e => setUsername(e.target.value)} className="input" required />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faUser} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input type="password" placeholder="*******" value={password} onChange={e => setPassword(e.target.value)} className="input" required />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox"><input type="checkbox" className='mx-2' />Remember me</label>
                                    </div>
                                    <div class="field is-flex  is-align-items-center is-flex-direction-column">
                                        <button type='submit' className="button is-success">Login</button>
                                    </div>
                                    <div class="field is-flex mt-4 is-align-items-center ">
                                        <p>New User ? </p>
                                        <button onClick={() => setIsLogin(false)} className="button  mx-2 is-link is-outlined">Sign Up</button>
                                    </div>
                                </form> : 

                                //*************************Sign up*******************************//

                                <form onSubmit={handleSignup} className="box">
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control has-icons-left">
                                        <input type="email" placeholder="e.g. patharia_jewellers" value={username} onChange={e => setUsername(e.target.value)} className="input" required />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" placeholder="e.g. abc@gmail.com" value={email} onChange={e => setEmail(e.target.value)} className="input" required />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" value={password} onChange={e => setPassword(e.target.value)} className="input" required />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="checkbox"><input type="checkbox" className='mx-2' />Remember me</label>
                                </div>
                                <div class="field is-flex  is-align-items-center is-flex-direction-column">
                                    <button type='submit' className="button is-success">Create Account</button>
                                </div>
                                <div class="field is-flex mt-4 is-align-items-center ">
                                    <p>Already Registered ? </p>
                                    <button onClick={() => setIsLogin(true)} className="button  mx-2 is-link is-outlined">Sign In</button>
                                </div>
                            </form>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;