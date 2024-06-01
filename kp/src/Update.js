import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { diaryID } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ title: '', content: '' });

    useEffect(() => {
        axios.get('주소' + diaryID)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('주소' + diaryID, data)
            .then(res => {
                alert("data update successfully");
                navigate('/');
            })
            .catch(err => console.error('Error updating data:', err));
    }

    return (
        <form className="Add" onSubmit={handleSubmit}>
             <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="diaryId"
                    disabled name="diaryId"
                    value={data.diaryID}
                    className="textArea"
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    className="textArea"
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={data.content}
                    name="cotent"
                    onChange={(e) => setData({ ...data, content: e.target.value })}
                    className="ContentArea"
                />
            </div>
            <button type="submit">Update</button>
        </form>
    );
}

export default Update;
