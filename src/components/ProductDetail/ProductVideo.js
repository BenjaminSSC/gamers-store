import React from 'react';

const ProductVideo = ({ videoUrl, videoTitle }) => {
  if (!videoUrl) {
    return <div className="mt-4 text-gray-500">No hay video disponible para este producto.</div>;
  }

  return (
    <div className="mt-4">
      <iframe
        width="100%"
        height="600"
        src={videoUrl}
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