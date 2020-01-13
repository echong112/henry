import React from 'react';

interface Props {
  title: string;
};

const Page: React.FC<Props> = (props) => {
  return (
    <div className="page">
      <h3>{props.title}</h3>
      <p>body</p>
    </div>
  )
}

export default Page;