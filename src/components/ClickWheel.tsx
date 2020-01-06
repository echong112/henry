import React from 'react';

const Wheel: React.FC = () => {
  const handleScroll = (event: any) => {
    if (event.nativeEvent.wheelDelta > 0) {
      console.log('scroll up');
    } else {
      console.log('scroll down');
    }
  };

  return (
    <div className="wheel" onWheel={handleScroll}>
    </div>
  );
}

export default Wheel;
