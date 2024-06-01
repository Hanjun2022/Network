import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./App.css";
function Add() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigat=useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
            title: title,
            content: content
        };

        try {
            const response = await axios.post('http://192.168.3.112:8087/api/create', requestData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            // 요청이 성공했을 때의 추가 로직을 여기에 작성
            alert("Data Added Successfully")
            navigat("/");
        } catch (error) {
            console.error('There was an error!', error);
            // 요청이 실패했을 때의 추가 로직을 여기에 작성
        }
    };

    return (
        <form onSubmit={handleSubmit} className="Add">
            <div>
                <label >Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="textArea"
                />
            </div>
            <div>
                <label className="Content">Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)
                    }
                    className="ContentArea"
                />
            </div>
            <button type="submit">Create Diary</button>
        </form>
    );
};

export default Add;
