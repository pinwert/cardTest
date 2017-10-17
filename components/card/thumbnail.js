import React from 'react';

export default function Thumbnail({ id, images, prevThumbnail, nextThumbnail }) {
  const style = {
    backgroundImage: `url(${images[0]})`
  };
  return (
    <div className="hit-thumbnail-container">
      <div className="hit-thumbnail" style={ style }>
        <a href={`/vacation-rental/${id}`} className="hit-url" target="_blank"/>
        <div className="arrow-container previous" onClick={ prevThumbnail }>
          <i className="icon-chevron-left hit-icon-left"/>
        </div>
        <div className="arrow-container next" onClick={ nextThumbnail }>
          <i className="icon-chevron-right hit-icon-right"/>
        </div>
      </div>
    </div>
  );
}
