import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, idx) => (
            <div key={idx}>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-70"
              >
                {title}
              </Typography>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between">
          <Typography
            variant="small"
            className="text-gray-600 mb-4 md:mb-0 text-center"
          >
            &copy; {currentYear} Your Company. All Rights Reserved.
          </Typography>

          <div className="flex gap-6 text-gray-600 text-2xl">
            {/* ✅ Facebook */}
            <a
              href="https://www.facebook.com/share/19UkLnbeQ1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>

            {/* ✅ WhatsApp (Nepal number: 9844815108) */}
            <a
              href="https://wa.me/9779844815108"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-900 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
