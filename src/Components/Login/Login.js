import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login(props) {
    const navigate = useNavigate()
    const [sucess, setsucess] = useState("")
    const [error, seterror] = useState("")
    const [users, setuser] = useState({})
    const [load,setload]=useState(true)
    const handler = (e) => {
        const { name, value } = e.target;
        setuser({ ...users, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault();
        //API fetching     
        axios.post('https://password-reset-0m2v.onrender.com/user/login', users)
            .then((res) => {
                //console.log(res)
                seterror("")
                setload(true)
                if (res.status === "200") {
                    setsucess("Login sucessfull")
                }
                window.localStorage.setItem("token", res.data)
                navigate("/login/sucess")

            })
            .catch((error) => {
                //console.log(error)
                setsucess("")
                const { data } = error.response
                seterror(data)
                setload(true)

            })

    }
    return (
        <div>
            <div className='container'>
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">

                        <div className="row">

                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>

                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" onChange={handler} name='email' placeholder="Enter Email Address..."></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user" onChange={handler} name='password' placeholder="Password"></input>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label" >Remember
                                                    Me</label>
                                            </div>
                                            {error !== null ? <span className='text-danger'>{error}</span> : null}
                                            {sucess !== null ? <span className='text-success'>{sucess}</span> : null}
                                        </div>
                                        <button onClick={(e)=>{submit(e);setload(false)}} className="btn btn-primary btn-user btn-block">
                                        { load ? <span> Login</span> : <div className='spinner-border text-primary ' role='status'>
                                                 </div>}
                                        </button>

                                    </form>
                                    <hr></hr>
                                    <div className="text-center">
                                        <Link to='/'
                                            className="small" >Forgot Password?
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to='/register'
                                            className="small">Create an Account!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 d-none d-lg-block'>
                                <img src='updatepass.jpg' height={"400px"} width={"400px"} alt='login pic'></img>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;