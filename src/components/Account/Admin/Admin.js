import React from "react";
import AddPoints from "./AddPoints/AddPoints";
import MintHthonCertificate from "./MintHthonCertificate/MintHthonCertificate";
import './Admin.css';

const API_URL_PROD = "http://127.0.0.1:5000";

const Admin = () => {
  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-components">
        <AddPoints apiUrl={API_URL_PROD}/>
        <MintHthonCertificate apiUrl={API_URL_PROD}/>
      </div>
    </div>
  );
};

export default Admin;
