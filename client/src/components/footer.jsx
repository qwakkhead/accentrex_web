import React from "react";
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
import footerBg from "../assets/footerBg.png";
import footerLogo from "../assets/AccentrexLogo.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat text-white pt-8 px-4 mt-12"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Logo & Description */}
        <div className="text-center md:text-left max-w-md">
          <img
            src={footerLogo}
            alt="Footer Logo"
            className="max-w-[70px] mx-auto md:mx-0"
          />
          <p className="text-sm mt-2">
            We provide personalized migration solutions, visa assistance, and
            expert guidance to suit your unique goals—whether you're a skilled
            professional, student, entrepreneur, family member, or traveler. Our
            mission is to simplify the migration journey with clear, step-by-step
            support every step of the way.
          </p>
        </div>

        {/* Services & Contacts */}
        <div className="text-center md:text-left text-sm">
          <p className="font-bold">SERVICES</p>
          <ul className="list-none space-y-1 mt-1">
            <li>Visa Application</li>
            <li>Study, Live, and Migrate Program</li>
            <li>Seminar Registration</li>
          </ul>

          <p className="font-bold mt-4">CONTACTS</p>
          <ul className="list-none space-y-2 mt-1">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope /> 
              <a href="mailto:eaoz@gmail.com" className="underline">
                eaoz@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhone />
              <div>
                <a href="tel:09958494428" className="underline">09958494428</a> /{" "}
                <a href="tel:09454352606" className="underline">09454352606</a>
              </div>
            </li>
            <li className="flex items-start gap-2 justify-center md:justify-start">
              <FaMapMarkerAlt className="mt-1" />
              <span className="break-words">
                Suite 1414, 14th floor, AIC Burgundy Empire Tower, ADB Ave.
                Corner, Garnet Road, Ortigas Center, Pasig City (Back of
                Robinson's Galleria)
              </span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaFacebook />
              <a
                href="https://www.facebook.com/accentrex/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                facebook.com/accentrex
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-[#830F0F] text-white text-center text-xs mt-6 py-5 uppercase z-50">
        Copyright © 2025 ACCENTREX. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
