import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api';
import { toast } from 'react-toastify';
import ProductDetailHeader from '../components/ProductDetail/ProductDetailHeader';
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductVideo from '../components/ProductDetail/ProductVideo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.error || 'Error al cargar el producto');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="bg-black min-h-screen text-white">Cargando producto...</div>;
  if (!product) return <div className="bg-black min-h-screen text-white">Producto no encontrado</div>;

  const imageUrl = product.imageurl && product.imageurl.startsWith('/uploads/')
    ? `https://gamers-site.netlify.app${product.imageurl}`
    : product.imageurl || '/images/sekiro-ps4.webp';

  const videoUrl = product.videourl || null;

  return (
    <div className="bg-black text-white">
      <Nav />
      <div className="container mx-auto pt-20 p-4 min-h-screen">
        <ProductDetailHeader />
        <div className="flex flex-col lg:flex-row">
          <ProductImage imageUrl={imageUrl} alt={product.name} />
          <ProductInfo
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category || 'Desconocido'}
            format={product.format || 'Desconocido'}
            developer={product.developer || 'Desconocido'}
            platforms={product.platforms}
          />
        </div>
        {videoUrl && <ProductVideo videoUrl={videoUrl} videoTitle={product.name} />}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;