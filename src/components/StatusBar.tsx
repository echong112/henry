import React, { useState } from 'react';

const StatusBar: React.FC = () => {

  const [title, setTitle] = useState('iPod');
  return (
    <div className="status-bar">
      <span className="status"></span>
      <span>{title}</span>
      <span className="battery">Battery</span>
    </div>
  )
}

export default StatusBar;