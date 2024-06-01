import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [inputData, setInputData] = useState({ name: '', email: '' });

    const navigat =useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3003/users',inputData)
    //     .then(res=>{
    //         alert("data Successful");
    //         navigat('/');
    //     }).catch(err=>console.log(err));
    // };onSubmit={handleSubmit}

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form >
                    <div>
                        <label htmlFor="title">Name:</label>
                        <input type="text" name="title" className='form-control' value={inputData.title}  />
                    </div>
                    <div>
                        <label htmlFor="content">Email:</label>
                        <input type="email" name="content" className='form-control' value={inputData.content} />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Add;
