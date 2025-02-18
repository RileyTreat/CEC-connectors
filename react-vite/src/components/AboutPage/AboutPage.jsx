// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative p-8 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/bulb.jpg')" }}>

    {/* Content Wrapper */}
    <div className="relative z-10 max-w-5xl mx-auto bg-black p-8 rounded-lg shadow-lg bg-opacity-60">

      {/* Logo */}
      <img src="/logo-name.jpg" alt="Logo" className="mx-auto mb-6" />

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-center text-white mb-8">About the DOE Community Energy Connectors Program</h1>

      {/* Mission Section */}
      <section className="mb-6">
        <div className="bg-blue-700 bg-opacity-80 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p class="text-black">
              The mission of the DOE Community Energy Connectors Program is to build capacity for local communities in their clean energy development efforts.
              The Community Energy Connectors (CEC) initiative, led by the U.S. Department of Energy's Office of State and Community Energy Programs (SCEP), aims to establish a network of regional partner organizations to provide technical assistance and capacity-building support to communities. The mission of CEC is to strengthen local clean energy support systems by engaging various stakeholders—including utilities, community-based organizations, academic institutions, industry, and economic development agencies—to plan, implement, and scale clean energy projects. Additionally, CEC seeks to build awareness, coordination, collaboration, and capacity among stakeholders through in-person and virtual convenings, workshops, and training sessions. The initiative also focuses on identifying and addressing place-based challenges, opportunities, and priorities through direct technical assistance and community engagement, supporting communities in transforming clean energy and economic development goals into "shovel-ready" projects, and ensuring that governments are set up for future success after completing their Energy Efficiency and Conservation Block Grant (EECBG) Program projects.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-6">
        <div className="bg-green-600 bg-opacity-80 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-right">Vision</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p class="text-black">
              The vision of CEC is to empower communities to achieve sustainable economic development and environmental benefits through clean energy deployment, thereby contributing to the broader goals of reducing energy use, decreasing fossil fuel emissions, and improving energy efficiency. By connecting EECBG grantees and state subgrantees with key stakeholders and resources, CEC aims to foster a collaborative environment that accelerates the transition to a clean energy economy.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="mb-6">
        <div className="bg-blue-600 bg-opacity-80 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p class="text-black">
              The purpose of this program is to provide communities with the technical expertise and resources needed to implement clean energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-6">
        <div className="bg-green-600 bg-opacity-80 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-right">Overview of the DOE Community Energy Connectors Program</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p class="text-black">
              The DOE Community Energy Connectors Program provides vital support to local governments and tribal communities, enabling them to reduce energy costs, create jobs, and achieve sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Supporting Section */}
      <section className="mb-6">
        <div className="bg-blue-600 bg-opacity-80 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Supporting Regional Clean Energy and Economic Development</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p class="text-black">
              The program offers a range of services and resources designed to enhance the capacity of regions and communities in energy efficiency, renewable energy, and economic development.
            </p>
          </div>
        </div>
      </section>

      {/* The Role Section */}
      <section className="mb-6">
        <div className="bg-green-600 bg-opacity-80 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-right">The Role of Energy Connectors in Local Communities</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p class="text-black">
              Energy Connectors serve as critical links between communities and resources, fostering collaboration and providing technical assistance to ensure sustainable energy solutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  </div>
  );
};

export default AboutPage;
