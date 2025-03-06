import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import { toast } from 'react-toastify';
import ProductFilter from '../components/Products/ProductFilter';
import ProductGrid from '../components/Products/ProductGrid';
import ProductPagination from '../components/Products/ProductPagination';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
        toast.error(error.error || 'Error al cargar productos');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Cargando productos...</div>;

  return (
    <div className="bg-white text-white ">
      <Nav />
      <div className="container mx-auto pt-24 p-4 min-h-screen">
        <ProductFilter onFilter={handleFilter} />
        <ProductGrid products={currentProducts} />
        <ProductPagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
          onPaginate={paginate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;