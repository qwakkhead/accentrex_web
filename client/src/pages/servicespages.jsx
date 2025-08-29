import React from 'react';
import '../styles/index.css';
import visaIcon from '../assets/Group 7.png';
import migrateIcon from '../assets/Group 51.png';
import seminarIcon from '../assets/Earth Dots.png';
import '../styles/index.css';
import Navbar from '../components/navbar';

import Footer from '../components/footer'; 

function Services() {
  return (
    <div className="font-sans text-[#831515] bg-white">
      <Navbar />

      <div className="text-center text-5xl font-bold my-16 mt-16">We Offer</div>

      {/* Responsive grid for service cards */}
      <div className="grid grid-cols-1 px-10 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:px-12 shadow-lg py-4">
        <ServiceCard
          title="Visa Application"
          image={visaIcon}
          buttonLabel="Apply Here"
          description="We provide professional assistance for all types of visa applications, including regular tourist visas and student visas for individuals planning to study abroad. Our team ensures a hassle-free process by guiding you through document preparation, submission procedures, and interview readiness, increasing your chances of approval."
        />

        <ServiceCard
          title="Study, Live, and Migrate Program"
          image={migrateIcon}
          buttonLabel="Apply for Migration Assistance"
          description="Our integrated program is designed for individuals seeking long-term opportunities abroad. We offer end-to-end support in studying overseas, transitioning into permanent residency, and eventually settling in your chosen country. With expert advice on educational institutions, immigration pathways, and settlement services, we help turn your global dreams into reality."
        />

        <ServiceCard
          title="Seminar Registration"
          image={seminarIcon}
          buttonLabel="Register here"
          description="Stay informed and prepared by joining our informative seminars on international education, immigration policies, and career opportunities abroad. Register for our upcoming sessions to gain valuable insights, meet industry experts, and receive personalized guidance tailored to your goals."
        />
      </div>

      <Footer /> {/* Footer component used here */}
    </div>
  );
}

function ServiceCard({ title, image, description, buttonLabel }) {
  return (
    <div className="bg-[#831515] text-white rounded-3xl px-6 py-8 text-center flex flex-col h-full shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <img src={image} alt={title} className="max-w-[80px] mx-auto mb-4" />
      <p className="bg-white text-[#831515] p-4 rounded-xl text-sm leading-relaxed text-justify flex-grow">
        {description}
      </p>
      <button className="mt-5 bg-white text-[#831515] font-bold text-sm px-4 py-2 rounded-xl hover:bg-gray-100">
        {buttonLabel}
      </button>
    </div>
  );
}

export default Services;
