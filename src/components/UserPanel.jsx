import React from 'react';
import userImg from '../images/user.jpeg';
import './UserPanel.css';

const UserPanel = () => (
  <div className="user-panel">
    <img src={userImg} alt="user" className="user-image"/>
    <p>Report for</p>
    <h1>Christopher <br/>Thauer</h1>
  </div>
)

export default UserPanel;