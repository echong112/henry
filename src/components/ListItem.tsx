import React, { useState } from 'react';
import { Link} from "react-router-dom";
import { useSelector } from 'react-redux';

interface Props {
  currItem: any;
  itemKey: number;
  isActive: boolean;
  slug?: string;
};

const MenuItem: React.FC<Props> = (props) => {
  const [url] = useState('/');
  const isPlaying = useSelector((state: any) => state.isPlaying);

  return (
    <Link className={`menu-item ${props.isActive ? 'active' : ''} ${props.slug === 'nowplaying' ? 'now-playing' : ''} ${isPlaying ? 'playing' : ''}`} to={{
      pathname: url,
      state: {
        currentItem: props.currItem
      }
    }}>{props.currItem.title}</Link>
  );
};
export default MenuItem;
