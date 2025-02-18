// src/pages/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (

  <div className="p-8 bg-cover bg-center bg-fixed h-screen" style={{ backgroundImage: "url('/bulb.jpg')" }}>
  {/* Centered Box */}
  <div className="max-w-4xl mx-auto bg-black p-8 rounded-lg shadow-lg bg-opacity-60">

    <img
      src="/logo-name.jpg"
      alt="Logo"
      className="mx-auto mb-6"
    />

    <h1 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h1>

    {/* Outer Blue Box */}
    <div className="bg-blue-700 p-6 rounded-lg shadow-md">

      {/* Inner Gray Box containing all sections */}
      <div className="bg-white p-6 rounded-lg">

        {/* Address Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <p>123 Energy St., Green City, EC 10101</p>
        </section>

        {/* Phone Number Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Phone Number</h2>
          <p>(123) 456-7890</p>
        </section>

        {/* Email Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Email</h2>
          <p>contact@communityenergyconnectors.org</p>
        </section>

        {/* Social Media Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/communityenergyconnectors" target="_blank" rel="noopener noreferrer" className="text-blue-500">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/energyconnectors" target="_blank" rel="noopener noreferrer" className="text-blue-500">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/communityenergyconnectors" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  </div>
</div>
  );
};

export default ContactPage;
