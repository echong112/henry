import React, { useState } from 'react';
import battery from '../assets/img/battery-icon.png';

const StatusBar: React.FC = () => {

  const [title, setTitle] = useState('iPod');
  return (
    <div className="status-bar">
      <span className="status"></span>
      <span>{title}</span>
      <span className="battery"><img src={battery} /></span>
    </div>
  )
}

export default StatusBar;