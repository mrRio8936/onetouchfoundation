import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-green-50 text-gray-600">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="h-10" src={logo} alt="One Touch Logo" />
              <span className="ml-2 text-lg font-bold tracking-wide text-gray-600 uppercase">
                One Touch Foundation
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-600">
              One Touch means A touch for those who needed give him direction to
              help him out for a change for their life.
            </p>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4">
            <p className="font-semibold tracking-wide text-green-800 mb-2">
              Quick Links
            </p>
            <div className="flex space-x-6">
              <a
                href="/"
                className="transition-colors duration-300 text-gray-600 hover:text-green-500"
              >
                Home
              </a>
              <a
                href="/causes"
                className="transition-colors duration-300 text-gray-600 hover:text-green-500"
              >
                News & Updates
              </a>
              <a
                href="/gallery"
                className="transition-colors duration-300 text-gray-600 hover:text-green-500"
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="transition-colors duration-300 text-gray-600 hover:text-green-500"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
          <p className="text-sm text-gray-600">
            © 2025 One Touch Foundation All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-gray-600 hover:text-green-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <span>
              Powered By{" "}
              <a
                href="https://colorfulgraphic.com/"
                className="text-green-700 hover:text-green-900"
              >
                Colorful Graphics
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
