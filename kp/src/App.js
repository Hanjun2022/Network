import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container mt-5">
      <div className="text-end">
      
        <Link to="/create" className="btn btn-primary">Add_button</Link>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
      
        </tbody>
      </table>
    </div>
  );
}

export default App;
