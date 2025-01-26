// src/pages/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Address</h2>
        <p>123 Energy St., Green City, EC 10101</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Phone Number</h2>
        <p>(123) 456-7890</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Email</h2>
        <p>contact@communityenergyconnectors.org</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Follow Us on Social Media</h2>
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
  );
};

export default ContactPage;
