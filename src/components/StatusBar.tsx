import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import battery from '../assets/img/battery-icon.png';

const StatusBar: React.FC = () => {
  const [title, setTitle] = useState('iPod');
  const activeTitle = useSelector((state: any) => state.title);
  const isPlaying = useSelector((state: any) => state.isPlaying);
  useEffect(() => {
    setTitle(activeTitle);
  }, [activeTitle]);
  return (
    <div className="status-bar">
      <span className="status">
        {isPlaying && (
          <span>Play</span>
        )}
      </span>
      <span className="status-bar__title">{title}</span>
      <span className="battery"><img alt="battery" src={battery} /></span>
    </div>
  )
}

export default StatusBar;