// src/pages/ResourcesPage.jsx
import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="p-8 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/bulb.jpg')" }}>
    <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-md">
    <div className="relative z-10">
      <img
      src="/logo-name.jpg"
      alt="Logo"
      className="mx-auto mb-8 "
      />


      <h1 className="text-3xl font-bold text-center mb-6 text-white">Resources for Clean Energy Development</h1>

      {/* Case Studies and Success Stories */}
      <section className="mb-8  p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold  text-white mb-4">Case Studies and Success Stories</h2>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold">Examples of Successful Regional Clean Energy Projects</h3>
          <p>Here you can include examples of successful projects from different regions, highlighting their impact and the lessons learned.</p>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mt-4">Impact Stories from Communities and Economic Development Programs</h3>
          <p>Share stories of how communities have benefited from clean energy programs and the economic development impacts they’ve experienced.</p>
        </div>
      </section>

      {/* Technical Assistance Programs */}
      <section className="mb-8  p-6  rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Other Technical Assistance Programs for Clean Energy Development</h2>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold">TCTACs (EPA Environmental Justice Thriving Communities Technical Assistance Centers)</h3>
          <p>TCTACs provide support to recipients with application development, strategy development, community engagement, capacity building, and more.</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mt-4">Community Energy Fellowship</h3>
          <p>The DOE-sponsored staff based in communities helps increase the capacity and impact of EECBG-funded projects. 26 fellows are currently onboarded across the country.</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mt-4">Blueprint & Blueprint Cohorts</h3>
          <ul className="list-disc pl-5">
            <li>Blueprints are model programs and projects designed to help local and tribal governments achieve high impact results with limited dollars.</li>
            <li>These offer ideas in energy efficiency, renewable energy, transportation, electrification, clean energy finance, and workforce development.</li>
            <li>Blueprint users can attend monthly cohort meetings in 12 topic areas, to access additional technical support, on-demand resources, and knowledge sharing on the C40 Knowledge Hub.</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mt-4">Arctic Ambassador Program</h3>
          <p>Participation in the Arctic Ambassador program brings capacity to communities in Alaska to support clean energy development and energy transitions.</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mt-4">NREL Technical Support</h3>
          <p>The National Renewable Energy Lab (NREL) offers general consultation services to help applicants with technical questions and application needs. Support is available to EECBG grantees for 10-20 hours or more upon request.</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mt-4">Other Technical Assistance Requests</h3>
          <p>The DOE works to provide some amount of guidance to every request, within budgetary constraints. Additional webinars and trainings are also available based on the needs and interests of EECBG recipients.</p>
        </div>
      </section>
    </div>
  </div>
  </div>
  );
};

export default ResourcesPage;
