
// PictureList.js
import React from 'react';

function PictureList({ pictures, isLoading }) {
  return (
    <div className="picture-list">
      {pictures.map(picture => (
        <div key={picture.id} className="picture-item">
          {isLoading ? (
            <div className="shimmer-effect" />
          ) : (
            <img src={picture.urls.small} alt={picture.description} />
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
