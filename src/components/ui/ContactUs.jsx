import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="mt-24 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="flex flex-col space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500 w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  Our Address
                </h4>
                <p className="text-gray-600">123 Green Street, Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500 w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Email Us</h4>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-500 w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Call Us</h4>
                <p className="text-gray-600">+880 123 456 789</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-lg w-full focus:outline-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-lg w-full focus:outline-blue-500"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border rounded-lg w-full h-32 focus:outline-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
