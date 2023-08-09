import React from 'react';
import ContentLoader from 'react-content-loader';

function ShimmerEffect({ width, height }) {
    return (
      <ContentLoader
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        
        backgroundColor="#7F7F7F"
        foregroundColor="white"
      >

      <rect x="0" y="0" rx="3" ry="3" width="300" height="300"  stroke="red"  strokeWidth="1" />
    
      {/* Add more rectangle elements to customize the shimmer */}
    </ContentLoader>
  );
}

export default ShimmerEffect;
