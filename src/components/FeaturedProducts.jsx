import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Card components
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const FeaturedProducts = ({ onCategoryClick, setIsSignUp }) => {
  const [products, setProducts] = useState([]); // ডাটাবেস থেকে আসা প্রোডাক্ট
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔥 ১. ব্যাকেন্ড থেকে ডাটা নিয়ে আসা
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // ২. রেসপন্সিভ আইটেম স্লাইড আপডেট
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // অটো-প্লে
  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [maxIndex, products]);

  const translateValue = `-${currentIndex * (100 / itemsPerSlide)}%`;

  const handleCardClick = (e) => {
    e.preventDefault();
    if (setIsSignUp) setIsSignUp(false);
    if (onCategoryClick) onCategoryClick();
  };

  if (loading) {
    return <div className="text-center py-20 font-bold">Loading Fresh Products...</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
            Fresh Products
          </h2>
          <Link to="/user/products" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
            View All&nbsp;
            <svg className="w-5 h-5" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateValue})` }}
            >
              {products.map((product) => (
                <div key={product._id} className="shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2">
                  <Card className="h-full">
                    <button onClick={handleCardClick} className="block group cursor-pointer w-full text-left">
                      <div className="overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-80 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="text-center">
                        <h3 className="font-bold text-xl text-gray-800 group-hover:text-green-600 transition">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-green-700 font-bold">${product.price}</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{product.unit}</span>
                        </div>
                        <span className="text-sm text-gray-500 mt-2 block">Login to Shop</span>
                      </CardContent>
                    </button>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          {products.length > itemsPerSlide && (
            <>
              <button className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 bg-white p-4 rounded-full text-gray-700 shadow-xl z-10 hidden lg:block" onClick={prevSlide}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 bg-white p-4 rounded-full text-gray-700 shadow-xl z-10 hidden lg:block" onClick={nextSlide}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;