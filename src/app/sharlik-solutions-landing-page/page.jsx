"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Fire Alarm Systems",
      icon: "fa-bell",
      description:
        "State-of-the-art fire detection and alarm systems for early warning and protection.",
    },
    {
      id: 2,
      title: "Sprinkler Systems",
      icon: "fa-shower",
      description:
        "Automated fire suppression systems designed for rapid response and maximum coverage.",
    },
    {
      id: 3,
      title: "Hydrant & Hose",
      icon: "fa-fire-extinguisher",
      description:
        "Professional-grade fire hydrants and hose systems for emergency response.",
    },
    {
      id: 4,
      title: "Control Panels",
      icon: "fa-toolbox",
      description:
        "Advanced control panels for centralized monitoring and management of fire safety systems.",
    },
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="font-roboto">
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <img
              src="https://ucarecdn.com/82d39f20-2c16-4aae-b1ec-e5efea443255/-/format/auto/"
              alt="Sharlik Solutions Logo"
              className="h-12"
            />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-[#FF6B35]`}
              ></i>
            </button>

            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}
            >
              <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
                <li>
                  <a
                    href="#services"
                    className="text-gray-800 hover:text-[#FF6B35]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-800 hover:text-[#FF6B35]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-800 hover:text-[#FF6B35]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-24 bg-gradient-to-r from-[#FF6B35] to-[#FF8B35] text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Fire Safety Installation Services
              </h1>
              <p className="text-xl mb-8">
                Expert installation and maintenance services to protect what
                matters most
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#FF6B35] px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Schedule Installation
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                >
                  <i
                    className={`fas ${service.icon} text-[#FF6B35] text-3xl mb-4`}
                  ></i>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p
                    className={`text-gray-600 ${
                      expandedService === service.id ? "" : "line-clamp-2"
                    }`}
                  >
                    {service.description}
                  </p>
                  <button
                    onClick={() => toggleService(service.id)}
                    className="text-[#FF6B35] mt-4 hover:underline"
                  >
                    {expandedService === service.id ? "Read Less" : "Read More"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To provide cutting-edge fire safety solutions that protect
                    lives and property through expert installation and
                    maintenance services.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">
                    Industries Served
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <i className="fas fa-building mr-2 text-[#FF6B35]"></i>{" "}
                      Commercial Buildings
                    </li>
                    <li>
                      <i className="fas fa-industry mr-2 text-[#FF6B35]"></i>{" "}
                      Industrial Facilities
                    </li>
                    <li>
                      <i className="fas fa-home mr-2 text-[#FF6B35]"></i>{" "}
                      Residential Complexes
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                  <ul className="text-gray-600 space-y-4">
                    <li>
                      <i className="fas fa-check-circle mr-2 text-[#FF6B35]"></i>{" "}
                      24/7 Emergency Support
                    </li>
                    <li>
                      <i className="fas fa-check-circle mr-2 text-[#FF6B35]"></i>{" "}
                      Certified Technicians
                    </li>
                    <li>
                      <i className="fas fa-check-circle mr-2 text-[#FF6B35]"></i>{" "}
                      Latest Technology
                    </li>
                    <li>
                      <i className="fas fa-check-circle mr-2 text-[#FF6B35]"></i>{" "}
                      Customized Solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Numbers</h3>
                <p className="text-gray-600">Sales: (555) 123-4567</p>
                <p className="text-gray-600">Installation: (555) 234-5678</p>
                <p className="text-gray-600">Support: (555) 345-6789</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-600">123 Safety Street</p>
                <p className="text-gray-600">Fire Prevention City, FP 12345</p>
                <p className="text-gray-600">info@sharliksolutions.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://ucarecdn.com/82d39f20-2c16-4aae-b1ec-e5efea443255/-/format/auto/"
                alt="Sharlik Solutions Logo"
                className="h-12 mb-4"
              />
              <p className="text-gray-400">
                Your trusted partner in fire safety solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: info@sharliksolutions.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Sharlik Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Schedule Installation</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-2 border rounded h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6B35] text-white py-2 rounded hover:bg-[#FF8B35] transition duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;