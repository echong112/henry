import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="status-bar">
      <span className="status"></span>
      <span>Title</span>
      <span className="battery">Battery</span>
    </div>
  )
}

export default StatusBar;