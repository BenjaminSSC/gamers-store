import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductFilter from '../components/Products/ProductFilter';
import ProductGrid from '../components/Products/ProductGrid';
import ProductPagination from '../components/Products/ProductPagination';
import PostFormContent from '../components/PostForm/PostFormContent';

const PostForm = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct]);
    setFilteredProducts([...products, newProduct]);
  };

  if (loading) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Cargando productos...</div>;

  return (
    <post>
      <Nav />
      <div className="p-4 min-h-screen pt-24 flex justify-center">
        <PostFormContent onProductCreated={handleProductCreated} />
      </div>
      <div className="container mx-auto p-4">
        <ProductFilter onFilter={handleFilter} />
        <ProductGrid products={currentProducts} />
        <ProductPagination 
          currentPage={currentPage} 
          totalPages={Math.ceil(filteredProducts.length / productsPerPage)} 
          onPaginate={paginate}
        />
      </div>
      <Footer />
    </post>
  );
};

export default PostForm;