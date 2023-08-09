
// PictureList.js
import React from 'react';

function PictureList({ pictures, isLoading }) {
  return (
    <div className="picture-list">
      {pictures.map(picture => (
        <div key={picture.id} className="picture-item">
          {isLoading ? (
            <div className="shimmer-effect" key={`shimmer-${picture.id}`} />
          ) : (
            <img src={picture.urls.small} alt={picture.description} key={picture.id} />
          )}
          {picture.description ? (
            <p className='para'>{picture.description}</p>
          ) : (
            <p className='para invisible-placeholder'>&nbsp;</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default PictureList;

