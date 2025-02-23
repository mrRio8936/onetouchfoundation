import React from "react";

const newspaperCuttings = [
  "/assets/paper/1.jpg",
  "/assets/paper/2.jpg",
  "/assets/paper/3.jpg",
  "/assets/paper/4.jpg",
];

export default function MediaCoverage() {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/bg/bg1.jpg')" }} // Change to your background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-8 text-green-600">In the News</h2>
        <p className="max-w-2xl mx-auto text-lg mb-12">
          Our NGO's efforts have been recognized by various media outlets. Here
          are some of the newspaper articles covering our initiatives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newspaperCuttings.map((image, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`News ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
