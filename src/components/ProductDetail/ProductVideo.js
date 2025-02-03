import React from 'react';

const ProductVideo = ({ videoTitle }) => {
  return (
    <div className="mt-4">
      <iframe 
        width="100%" 
        height="600"
        src="https://www.youtube.com/embed/rXMX4YJ7Lks" 
        title={videoTitle}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        className="w-full"
      ></iframe>
    </div>
  );
};

export default ProductVideo;