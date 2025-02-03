import React, { useState } from 'react';
import ProductFilter from '../components/Products/ProductFilter';
import ProductGrid from '../components/Products/ProductGrid';
import ProductPagination from '../components/Products/ProductPagination';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const products = [
  { id: 1, image: '../assets/images/outriders-ps4.webp', name: 'Outriders', price: '40' },
  { id: 2, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 2', price: '50' },
  { id: 3, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 3', price: '60' },
  { id: 4, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 4', price: '70' },
  { id: 5, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 5', price: '80' },
  { id: 6, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 6', price: '90' },
  // El resto estará en el backend
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <products>
      <Nav />
    <div className="container mx-auto p-4 min-h-screen">
      <ProductFilter onFilter={handleFilter} />
      <ProductGrid products={currentProducts} />
      <ProductPagination 
        currentPage={currentPage} 
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)} 
        onPaginate={paginate}
      />
    </div>
      <Footer />
    </products>
  );
};

export default Products;