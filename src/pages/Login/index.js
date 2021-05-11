/* Readable Scalable Secure */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setUserSession } from '../../Utils/Common/common.js';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import './style.css';

const Login = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    useEffect(() => {
      alert('username: admin / password: 123');
    }, []);
    // handle button click of login form
    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        // http://test-appschool.ml/php-jwt-example/api/login.php
        //'http://localhost/php-jwt-example/api/login.php'
        // 
        axios.post('http://appschool.ml/backend/api/login.php', JSON.stringify({
            email: username.value,
            password: password.value
        }))
            .then(response => {
                setLoading(false);
                console.log(jwt_decode(response.data.jwt));
                //console.log(props.history.push('/dashboard'));
                setUserSession(response.data.jwt, response.data.email);
                history.push('/dashboard');
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message === 'Invalid token specified');
                if (error === '') setError('Invalid token specified');
                else setError("Something went wrong. Please try again later.");
            });
        ;
    }

    return (
        <div className='login'>
            <div className='container'>
                <div className='row'>
                    <div className='signin'>
                        <h3 className='text-center'>Login</h3>
                        <br />
                        <form>
                            <div className="container-fluid">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <input type="text" {...username} placeholder="Email Address" className="form-control" />
                                        </div >
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="password" {...password} placeholder="Password" className="form-control" />
                                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <input className="btn btn-primary btn-block" type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*
                    <form>
                        <input type='text' placeholder='Name' onChange={this.handleUsername} autocomplete='on' />
                        <input type='password' placeholder='password' onChange={this.handlePassword} />
                        <input type='submit' className='btn-primary' value='login' onClick={this.Login} />
                    </form>
                    
                    */}

        </div>
    );
}

// User form input
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
export default Login;