import React from 'react';
import Thumbnail from './thumbnail';
import Info from './info';

export default function Card(props) {
  return (
    <div className="container">
      <Thumbnail { ...props }/>
      <Info { ...props }/>
    </div>
  );
}
