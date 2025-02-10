import React, { useState } from 'react';
import { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto URL with form data
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:jaws@jawsindia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl px-4 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-[#1842B6] mb-6 mt-7">
          Get in Touch with Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions or inquiries? Fill out the form below and our team will get back to you promptly.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
              placeholder="How can we help you?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1842B6] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
