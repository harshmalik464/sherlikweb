"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("fire-alarm");

  const services = {
    "fire-alarm": {
      title: "Fire Alarm Systems",
      icon: "fa-bell",
      description:
        "Advanced fire detection and alarm systems providing early warning protection for commercial and residential properties.",
      features: [
        "24/7 Monitoring",
        "Smoke & Heat Detection",
        "Emergency Voice Systems",
        "Mobile Notifications",
      ],
      specs: [
        "UL Listed Components",
        "Battery Backup",
        "Addressable Systems",
        "Zone Control",
      ],
      installation: [
        "Site Assessment",
        "System Design",
        "Professional Installation",
        "Testing & Certification",
      ],
      maintenance: [
        "Quarterly Inspections",
        "Annual Testing",
        "Battery Replacement",
        "Sensor Calibration",
      ],
      certifications: [
        "NFPA 72 Compliant",
        "UL Certification",
        "Local Code Compliance",
      ],
      images: ["alarm-system-1.jpg", "alarm-system-2.jpg"],
    },
    sprinkler: {
      title: "Sprinkler Systems",
      icon: "fa-shower",
      description:
        "State-of-the-art fire suppression systems designed for optimal coverage and rapid response.",
      features: [
        "Automatic Activation",
        "Zone Control",
        "Quick Response Heads",
        "Water Flow Monitoring",
      ],
      specs: [
        "NFPA 13 Design",
        "Pressure Rating: 175 PSI",
        "Coverage Area: Up to 225 sq ft per head",
        "Temperature Ratings: 135°F-286°F",
      ],
      installation: [
        "Hydraulic Assessment",
        "Pipe Network Design",
        "Head Installation",
        "System Testing",
      ],
      maintenance: [
        "Annual Flow Tests",
        "Head Inspection",
        "Valve Maintenance",
        "Antifreeze Check",
      ],
      certifications: [
        "NFPA 13 Compliance",
        "FM Global Approved",
        "Local Fire Marshal Certified",
      ],
      images: ["sprinkler-1.jpg", "sprinkler-2.jpg"],
    },
    hydrant: {
      title: "Hydrant & Hose Systems",
      icon: "fa-fire-extinguisher",
      description:
        "Complete hydrant and hose systems for reliable emergency response and fire control.",
      features: [
        "High Flow Rate",
        "Freeze Protection",
        "Quick Connect Valves",
        "Pressure Regulation",
      ],
      specs: [
        "Flow Rate: 500-1500 GPM",
        "Working Pressure: 150 PSI",
        "Hose Length: Up to 100ft",
        'Hydrant Height: 30"',
      ],
      installation: [
        "Underground Piping",
        "Hydrant Mounting",
        "Pressure Testing",
        "Flow Testing",
      ],
      maintenance: [
        "Bi-Annual Flushing",
        "Valve Lubrication",
        "Pressure Testing",
        "Winter Preparation",
      ],
      certifications: [
        "AWWA Standards",
        "UL Listed Equipment",
        "NFPA 24 Compliant",
      ],
      images: ["hydrant-1.jpg", "hydrant-2.jpg"],
    },
    control: {
      title: "Control Panel Systems",
      icon: "fa-toolbox",
      description:
        "Centralized fire safety control panels for comprehensive system monitoring and management.",
      features: [
        "Touch Screen Interface",
        "Remote Access",
        "Event Logging",
        "Integration Capabilities",
      ],
      specs: [
        "Power: 120V AC",
        "Backup: 24hr Battery",
        "Zones: Up to 256",
        "LCD Display",
      ],
      installation: [
        "Panel Mounting",
        "Wiring Configuration",
        "Programming",
        "Interface Setup",
      ],
      maintenance: [
        "Software Updates",
        "Battery Testing",
        "Sensor Verification",
        "Backup Systems Check",
      ],
      certifications: ["UL 864 Listed", "NFPA 72 Compliant", "CE Certified"],
      images: ["control-1.jpg", "control-2.jpg"],
    },
    maintenance: {
      title: "Maintenance Services",
      icon: "fa-wrench",
      description:
        "Comprehensive maintenance programs to ensure your fire safety systems remain in optimal condition.",
      features: [
        "24/7 Emergency Service",
        "Preventive Maintenance",
        "Repair Services",
        "System Updates",
      ],
      specs: [
        "Response Time: <4 hours",
        "Monthly Inspections",
        "Annual Certifications",
        "Documentation",
      ],
      installation: ["Not Applicable"],
      maintenance: [
        "System Testing",
        "Component Replacement",
        "Performance Optimization",
        "Compliance Updates",
      ],
      certifications: [
        "NICET Certified Technicians",
        "Factory Trained Staff",
        "Licensed Contractors",
      ],
      images: ["maintenance-1.jpg", "maintenance-2.jpg"],
    },
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
                  <a href="/" className="text-gray-800 hover:text-[#FF6B35]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-[#FF6B35]">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="text-gray-800 hover:text-[#FF6B35]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
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

      <main className="pt-24">
        <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B35] text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Our Services
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Comprehensive fire safety solutions tailored to your specific
              needs, backed by expert installation and maintenance.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full ${
                    activeTab === key
                      ? "bg-[#FF6B35] text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition duration-300`}
                >
                  <i className={`fas ${services[key].icon} mr-2`}></i>
                  {services[key].title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    {services[activeTab].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {services[activeTab].description}
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-2 gap-4 mb-6">
                    {services[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    Technical Specifications
                  </h3>
                  <ul className="grid grid-cols-2 gap-4 mb-6">
                    {services[activeTab].specs.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-cog text-[#FF6B35] mr-2"></i>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Installation Process
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {services[activeTab].installation.map((step, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center mr-3">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    Maintenance Requirements
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {services[activeTab].maintenance.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-tools text-[#FF6B35] mr-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                  <ul className="space-y-2">
                    {services[activeTab].certifications.map((cert, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-certificate text-[#FF6B35] mr-2"></i>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
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
                  <a href="/" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#about" className="text-gray-400 hover:text-white">
                    About
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
    </div>
  );
}

export default MainComponent;