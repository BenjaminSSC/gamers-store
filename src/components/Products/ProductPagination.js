import React from 'react';

const ProductPagination = ({ currentPage, totalPages, onPaginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <nav className="flex">
         <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => onPaginate(number)}
                className={`px-4 py-2 rounded ${
                  currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
                } hover:bg-blue-700`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductPagination;