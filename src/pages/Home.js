import React, { useState, useEffect } from 'react';
import { getProducts } from '../api'; // Importamos la función del backend
import { toast } from 'react-toastify';
import HeroCardGame from '../components/Games/HeroCardGame';
import dataHeroGames from '../utils/data.hero.images';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ProductFilter from '../components/Products/ProductFilter';
import ProductGrid from '../components/Products/ProductGrid';
import ProductPagination from '../components/Products/ProductPagination';
import FeaturedProductBanner from '../components/FeaturedProductBanner';

const Home = () => {
  const [products, setProducts] = useState([]); // Estado para productos del backend
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 6;

  // Fetch de productos del backend
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

  const featuredProduct = {
    image: '../assets/images/mortalkombat_banner.webp',
    title: 'MORTAL KOMBAT',
    price: 'USD$ 59,99',
    description: 'Mortal Kombat X combina una apariencia cinematográfica única con una jugabilidad totalmente nueva. Los jugadores pueden elegir entre peleas uno a uno o variantes de cada personaje, afectando el estilo de lucha.'
  };

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

  if (loading) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Cargando productos...</div>;

  return (
    <main className="flex-col w-full h-screen relative">
      <Nav />
      <FeaturedProductBanner 
        image={featuredProduct.image} 
        title={featuredProduct.title} 
        price={featuredProduct.price} 
        description={featuredProduct.description} 
      />
      <section className='flex flex-col w-full justify-center lg:flex-row gap-4 lg:gap-0'>
        {dataHeroGames.map((item, index) => (
          <HeroCardGame key={index} title={item.title} image={item.image} />
        ))}
      </section>
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
    </main>
  );
}

export default Home;