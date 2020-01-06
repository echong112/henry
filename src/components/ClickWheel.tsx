import React, { useEffect, SyntheticEvent, useRef } from 'react';

const Wheel: React.FC = () => {
  const handleScroll = (event: SyntheticEvent) => {
    console.log(event);
  };

  return (
    <div className="wheel" onWheel={handleScroll}>
    </div>
  );
}

export default Wheel;
