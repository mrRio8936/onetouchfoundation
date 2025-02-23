import React, { useState, useEffect } from "react";

const images = [
  //   "/assets/gallery/1.jpg",
  //   "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg",
  "/assets/gallery/10.jpg",
  "/assets/gallery/11.jpg",
  "/assets/gallery/12.jpg",
  "/assets/gallery/13.jpg",
  "/assets/gallery/14.jpg",
  "/assets/gallery/15.jpg",
  "/assets/gallery/16.jpg",
  "/assets/gallery/17.jpg",
  "/assets/gallery/18.jpg",
  "/assets/gallery/19.jpg",
  "/assets/gallery/20.jpg",
  "/assets/gallery/21.jpg",
  "/assets/gallery/22.jpg",
  "/assets/gallery/23.jpg",
  "/assets/gallery/24.jpg",
  "/assets/gallery/25.jpg",
  "/assets/gallery/26.jpg",
  "/assets/gallery/27.jpg",
  "/assets/gallery/28.jpg",
  "/assets/gallery/29.jpg",
  "/assets/gallery/30.jpg",
  "/assets/gallery/31.jpg",
  "/assets/gallery/32.jpg",
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      {/* Carousel Component */}
      <div className="relative bg-cover bg-center h-[80vh] mb-10">
        <img
          src={images[currentImageIndex]}
          alt="Carousel"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl">
          <button
            onClick={() =>
              setCurrentImageIndex(
                currentImageIndex === 0
                  ? images.length - 1
                  : currentImageIndex - 1
              )
            }
            className="bg-green-800 bg-opacity-50 p-2 rounded-full"
          >
            &#8249;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl">
          <button
            onClick={() =>
              setCurrentImageIndex(
                currentImageIndex === images.length - 1
                  ? 0
                  : currentImageIndex + 1
              )
            }
            className="bg-green-800 bg-opacity-50 p-2 rounded-full"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <h2 className="mt-10 text-4xl font-extrabold text-center text-green-600 mb-8">
        Our Image Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
