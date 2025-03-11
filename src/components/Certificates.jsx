import React, { useState } from "react";
import image from "../assets/certificatebg.jpg";

const certificates = [
  {
    title: "प्रतिज्ञा प्रमाणपत्र",
    fileType: "image",
    src: "/assets/paper/ngo_certificates.jpg",
  },
  {
    title: "Registration Details",
    fileType: "pdf",
    src: "/assets/paper/ngo_details.pdf",
  },
  {
    title: "Order for Provisional Registration",
    fileType: "pdf",
    src: "/assets/paper/ngo_details2.pdf",
  },
  {
    title: "Society Registry",
    fileType: "image",
    src: "/assets/paper/society.jpg",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="relative">
      {/* Background Image */}
      <img src={image} alt="Background" className="w-full h-64 object-cover" />

      {/* Certificates List */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Our Achievements
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center cursor-pointer"
              onClick={() => setSelectedCert(cert)} // ✅ Kahin bhi click kare to full-screen
            >
              {cert.fileType === "pdf" ? (
                <iframe
                  src={cert.src}
                  title={cert.title}
                  className="w-full h-48 rounded-md border cursor-pointer" // ✅ Pointer cursor on hover
                ></iframe>
              ) : (
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-md cursor-pointer" // ✅ Pointer cursor on hover
                />
              )}
              <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Modal for Image or PDF */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-4xl w-full max-h-full overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 text-3xl"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedCert.title}
            </h2>
            {selectedCert.fileType === "pdf" ? (
              <iframe
                src={selectedCert.src}
                title={selectedCert.title}
                className="w-full h-[90vh]"
              ></iframe>
            ) : (
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
