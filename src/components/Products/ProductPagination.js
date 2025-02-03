import React from 'react';

const ProductPagination = ({ currentPage, totalPages, onPaginate }) => {
  return (
    <div className="flex justify-center mt-4">
      <nav className="flex">
        {[...Array(totalPages)].map((_, i) => (
          <button 
            key={i + 1}
            onClick={() => onPaginate(i + 1)}
            className={`px-3 py-2 mx-1 ${currentPage === (i + 1) ? 'bg-aqua text-white' : 'bg-gray-200 text-gray-700'} rounded`}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProductPagination;