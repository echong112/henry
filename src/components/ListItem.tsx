import React, { useState } from 'react';
import { Link} from "react-router-dom";

interface Props {
  currItem: any;
  itemKey: number;
  isActive: boolean;
  slug?: string;
};

const MenuItem: React.FC<Props> = (props) => {
  const [url] = useState('/');

  return (
    <Link
      className={`menu-item ${props.isActive ? 'active' : ''}`}
      to={{
        pathname: url,
        state: {
          currentItem: props.currItem
        }
     }}>{props.currItem.title}</Link>
  );
};
export default MenuItem;
