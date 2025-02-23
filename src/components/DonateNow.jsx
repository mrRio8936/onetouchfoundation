import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DonateNow() {
  const formRef = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.amount.trim()) {
      newErrors.amount = "Donation amount is required";
    } else if (parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Donation amount must be greater than zero";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      amount: formRef.current.amount.value,
      message: formRef.current.message.value || "No message provided",
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all required fields correctly.");
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        "service_g53hnq4", // Service ID
        "template_kcwbj0m", // Template ID
        formRef.current,
        "gP3E-XguTngbB96Ca" // Public Key
      )
      .then(
        () => {
          toast.success("Thank you! Your donation details have been sent.");
          e.target.reset();
        },
        (error) => {
          toast.error("Oops! Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-24"
      style={{ backgroundImage: "url('/assets/bg/donation.jpg')" }}
    >
      <div className="bg-white bg-opacity-70 shadow-lg rounded-xl p-8 md:p-12 flex flex-col md:flex-row max-w-5xl w-full">
        <ToastContainer position="top-right" autoClose={3000} />
        {/* Left - Donation Form */}
        <div className="md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Donate Now</h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Donation Amount
              </label>
              <input
                type="number"
                name="amount"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.amount && (
                <p className="text-red-600 text-sm">{errors.amount}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md font-bold hover:bg-green-700 transition"
            >
              Donate Now
            </button>
          </form>
        </div>

        {/* Right - QR Code */}
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Scan to Donate
          </h3>
          <img
            src="/assets/paper/Qr.jpg"
            alt="QR Code"
            className="w-64 h-64 shadow-lg rounded-lg"
          />
          <p className="text-gray-600 mt-4">
            Scan the QR code to donate via UPI or any payment app.
          </p>
        </div>
      </div>
    </section>
  );
}
