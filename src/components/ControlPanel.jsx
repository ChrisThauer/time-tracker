import React from 'react';
import UserPanel from './UserPanel';
import './ControlPanel.css';

const ControlPanel = () => (
  <div className="control-panel">
    <UserPanel />
    <p className="toggle">Daily</p>
    <p className="toggle">Weekly</p>
    <p className="toggle">Monthly</p>
  </div>
)

export default ControlPanel;