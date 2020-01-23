import React from 'react';
import ScreenRouter from '../routes/Router';
import StatusBar from './StatusBar';

const Screen: React.FC = () => {
  return (
    <div className="bezel">
      <div className="screen">
        <StatusBar />
        <div className="screen__overlay"></div>
        <ScreenRouter />
      </div>
    </div>
  );
};

export default Screen;
