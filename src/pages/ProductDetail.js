import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailHeader from '../components/ProductDetail/ProductDetailHeader';
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductVideo from '../components/ProductDetail/ProductVideo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { productId } = useParams();
  // Aquí podrías obtener los datos del producto de una API o base de datos
  const product = {
    id: productId,
    name: 'Sekiro Shadows die twice',
    description: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit, Ipsam officia totam commodi excepturi blanditiis quaerat dolor a aliquam illo hic magnam, aspernatur vel fugiat incident voluptatum sit rerum labore cumque.',
    price: '50.00',
    category: 'Acción',
    format: 'Físico',
    developer: 'FromSoftware',
    videoTitle: 'Sekiro: Shadows Die Twice - Official Launch Trailer | PS4'
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />
      <div className="container mx-auto p-4">
        <ProductDetailHeader />
        <div className="flex flex-col lg:flex-row">
          <ProductImage imageUrl={product.imageUrl} alt={product.name} />
          <ProductInfo 
            name={product.name} 
            description={product.description} 
            price={product.price} 
            category={product.category} 
            format={product.format} 
            developer={product.developer} 
          />
        </div>
        <ProductVideo videoUrl={product.videoUrl} videoTitle={product.videoTitle} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;