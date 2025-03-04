import React, { useState, useEffect } from 'react';
import { getProducts } from '../api'; // Importamos la función del backend
import { toast } from 'react-toastify';
import PostFormHeader from '../components/PostForm/PostFormHeader';
import FormInput from '../components/PostForm/FormInput';
import FormTextarea from '../components/PostForm/FormTextarea';
import FormButton from '../components/PostForm/FormButton';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductFilter from '../components/Products/ProductFilter';
import ProductGrid from '../components/Products/ProductGrid';
import ProductPagination from '../components/Products/ProductPagination';

const PostForm = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
          toast.error(error.error || 'Error al cargar productos');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Post enviado: ${title} - ${content}`);
    setTitle('');
    setContent('');
  };

  if (loading) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Cargando productos...</div>;

  return (
    <post>
      <Nav />
    <div className="p-4 min-h-screen">
      <PostFormHeader />
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput label="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <FormTextarea label="Contenido" value={content} onChange={(e) => setContent(e.target.value)} rows="5" required />
        <FormButton onClick={handleSubmit}>Publicar</FormButton>
      </form>
      <div className="container mx-auto p-4 min-h-screen">
        <ProductFilter onFilter={handleFilter} />
        <ProductGrid products={currentProducts} />
        <ProductPagination 
          currentPage={currentPage} 
          totalPages={Math.ceil(filteredProducts.length / productsPerPage)} 
          onPaginate={paginate}
        />
      </div>
    </div>
      <Footer/>
    </post>
  );
};

export default PostForm;