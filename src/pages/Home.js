import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
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

  if (loading) return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      Cargando productos...
    </div>
  );

  return (
    <main className="flex flex-col w-full min-h-screen relative bg-white text-black">
      <Nav />
      <FeaturedProductBanner 
        image={featuredProduct.image} 
        title={featuredProduct.title} 
        price={featuredProduct.price} 
        description={featuredProduct.description} 
      />
      <section className="flex flex-col w-full justify-center items-center gap-4 p-4 md:flex-row md:gap-6">
        {dataHeroGames.map((item) => (
          <HeroCardGame 
            key={item.id}
            title={item.title} 
            image={item.image} 
            id={item.id}
          />
        ))}
      </section>
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
    </main>
  );
};

export default Home;