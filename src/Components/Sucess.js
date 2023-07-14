import React, { useEffect} from 'react';
import axios from 'axios';

function Sucess(props) {
    useEffect(() => {
        const usertoken = {
            token: window.localStorage.getItem("token")
        }

        axios.post('https://password-reset-0m2v.onrender.com/user/verifylogin', usertoken)
            .then((res) => {
                return res
        })

            .catch((error) => {

                return error
            })
    }, [])
    return (
        
            <div className='container text-center'>
            <h2 className='mt-4'>Login sucessfull</h2>
            
            
        
            
        </div>
    );
}

export default Sucess;