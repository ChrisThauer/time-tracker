import React from 'react';
import './TimePanel.css';

const TimePanel = () => (
  <div className="time-panel">
    <img src="../images/icon-work.svg" alt="icon"/>
    <div className="info-panel">
      <div className="info-panel__header">
        <h3>Work</h3>
        <img src="../images/icon-ellipsis.svg" alt=""/>
      </div>
      <h1>32hrs</h1>
      <p>Last Week - 36hrs</p>
    </div>
  </div>
)

export default TimePanel;