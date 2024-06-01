import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {useState} from "react";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

    // useEffect(() => {
  //   axios.get('http://localhost:3003/users')
  //     .then(res => {
  //       setColumns(Object.keys(res.data[0]));
  //       setRecords(res.data);
  //     }).catch(err=>console.log(err));
  // }, []);


  return (
    <div className="container mt-5">
      <div className="text-end">
      
        <Link to="/create" className="btn btn-primary">Add_button</Link>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
          {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {records.map((d, i) => (
            <tr key={i}>
              <td>{d.diaryId}</td>
              <td>{d.title}</td>
              <td>{d.content}</td>
              <td>
                <Link to={`/update/${d.diaryId}}`} className="btn btn-sm btn-success">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
