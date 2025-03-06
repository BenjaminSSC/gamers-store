import React from 'react';

const ProductVideo = ({ videoUrl, videoTitle }) => {
  if (!videoUrl) {
    return <div className="mt-4 text-gray-500">No hay video disponible para este producto.</div>;
  }

  return (
    <div className="mt-4 flex justify-center">
      <iframe
        height="600"
        src={videoUrl}
        title={videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full max-w-[1000px]"
      ></iframe>
    </div>
  );
};

export default ProductVideo;