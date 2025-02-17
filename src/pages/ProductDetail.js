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

  const imageUrl = product.imageUrl || `/images/logogamerstore.webp`;
  const videoUrl = product.videoUrl || null;

  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />
      <div className="container mx-auto p-4">
        <ProductDetailHeader />
        <div className="flex flex-col lg:flex-row">
          <ProductImage imageUrl={imageUrl} alt={product.name} />
          <ProductInfo
          name={product.name}
          description={product.description}
          precio={parseFloat(product.price).toFixed(2)}
          category={product.category || 'Acción'}
          format={product.format || 'Físico'}
          developer={product.developer || 'Desconocido'}
          platforms={product.platforms} // Pasa la lista completa en lugar de una cadena
        />
        </div>
        <ProductVideo videoUrl={videoUrl} videoTitle={product.name} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;