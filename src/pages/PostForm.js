import React, { useState } from 'react';
import PostFormHeader from '../components/PostForm/PostFormHeader';
import FormInput from '../components/PostForm/FormInput';
import FormTextarea from '../components/PostForm/FormTextarea';
import FormButton from '../components/PostForm/FormButton';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductFilter from '../components/Products/ProductFilter';
import ProductGrid from '../components/Products/ProductGrid';
import ProductPagination from '../components/Products/ProductPagination';

const products = [
  { id: 1, image: '../assets/images/outriders-ps4.webp', name: 'Outriders', price: '40' },
  { id: 2, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 2', price: '50' },
  { id: 3, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 3', price: '60' },
  { id: 4, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 4', price: '70' },
  { id: 5, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 5', price: '80' },
  { id: 6, image: '../assets/images/outriders-ps4.webp', name: 'Outriders 6', price: '90' },
  // El resto estará en el backend
];

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Post enviado: ${title} - ${content}`);
    setTitle('');
    setContent('');
  };

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