"use client";
import { useState, useEffect } from "react";

function MainComponent() {
  const [expandedService, setExpandedService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    if (showContactModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showContactModal]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>
          Sharlik Solutions - Professional Fire Safety & Security Systems
          Installation Services
        </title>
        <meta
          name="description"
          content="Leading provider of fire safety and security solutions in India. Professional installation of fire alarms, sprinkler systems, CCTV cameras, and access control systems. 24/7 maintenance services available."
        />
        <meta
          name="keywords"
          content="fire safety, security systems, fire alarm installation, sprinkler system, CCTV installation, access control, emergency services, fire safety consultation, Sharlik Solutions, security services Delhi NCR"
        />

        <meta
          property="og:title"
          content="Sharlik Solutions - Fire Safety & Security Systems"
        />
        <meta
          property="og:description"
          content="Professional fire safety and security systems installation, maintenance, and emergency services. Trusted by businesses across India."
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/77822f35-7b1c-4dc0-98a0-b4413350c8ce/-/format/auto/"
        />
        <meta property="og:url" content="https://sharliksolutions.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sharlik Solutions - Fire Safety & Security Experts"
        />
        <meta
          name="twitter:description"
          content="Professional fire safety and security systems installation and maintenance services. Available 24/7 for emergencies."
        />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/77822f35-7b1c-4dc0-98a0-b4413350c8ce/-/format/auto/"
        />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sharlik Solutions" />
        <link rel="canonical" href="https://sharliksolutions.com" />

        <link
          rel="icon"
          type="image/png"
          href="https://ucarecdn.com/77822f35-7b1c-4dc0-98a0-b4413350c8ce/-/format/auto/"
        />
      </head>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sharlik Solutions",
          "image": "https://ucarecdn.com/77822f35-7b1c-4dc0-98a0-b4413350c8ce/-/format/auto/",
          "description": "Professional fire safety and security systems installation and maintenance services.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Delhi NCR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.6139",
            "longitude": "77.2090"
          },
          "url": "https://sharliksolutions.com",
          "telephone": "+919289471417",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "sameAs": [
            "https://www.facebook.com/sharliksolutions",
            "https://www.twitter.com/sharliksolutions",
            "https://https://www.linkedin.com/company/sharlik-solutions?trk=public_profile_topcard-current-company",
            "https://www.instagram.com/sharliksolutions"
          ],
          "priceRange": "₹₹",
          "servesCuisine": "Fire Safety and Security Services"
        }
      `}</script>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Sharlik Solutions - Fire Safety Services",
          "serviceType": "Fire Safety and Security Systems",
          "areaServed": "Delhi NCR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Fire Safety Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fire Alarm System Installation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sprinkler System Installation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Security Camera Installation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Maintenance Services"
                }
              }
            ]
          }
        }
      `}</script>

      {/* Font Awesome Script */}
      <script
        src="https://kit.fontawesome.com/d3c5c6b4fc.js"
        crossorigin="anonymous"
      ></script>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Animate.css */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <div className="min-h-screen">
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[#FF6B35]/5 pattern-grid-lg opacity-40"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center py-6 relative">
              <div className="absolute inset-0 bg-[#FF6B35]/5 pattern-grid-lg opacity-40"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative"
              >
                <img
                  src="https://ucarecdn.com/77822f35-7b1c-4dc0-98a0-b4413350c8ce/-/format/auto/"
                  alt="Sharlik Automations Logo"
                  className="h-24 md:h-28"
                />
              </a>
            </div>

            <div className="py-12 md:py-20">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-6 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-gray-900 leading-tight">
                      Professional
                      <span className="text-[#FF6B35] block mt-2">
                        Fire Safety & Security Solutions
                      </span>
                    </h1>
                    <p className="text-xl sm:text-2xl font-inter font-medium text-gray-600 leading-relaxed">
                      Expert installation & maintenance services for complete
                      building safety and security systems
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#FF6B35] hover:bg-[#e55a24] transition-colors duration-300 shadow-lg w-full sm:w-auto"
                    >
                      Schedule Installation
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://ucarecdn.com/6c53fbad-9cfd-4d27-87e9-bf98135505ab/-/format/auto/"
                        alt="Fire Extinguisher Installation"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://ucarecdn.com/72d6dec0-9249-46f8-88ce-5aba98bbcfc6/-/format/auto/"
                        alt="Fire Safety Installation"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://ucarecdn.com/2092f897-e128-4bf4-a59e-5208f984aab0/-/format/auto/"
                        alt="Security Camera Installation"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://ucarecdn.com/ce52968f-043f-47ed-aa97-9fe293d68d20/-/format/auto/"
                        alt="Access Control System"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full h-12 fill-current text-gray-50"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        <main>
          <section
            id="services"
            className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          >
            <div className="text-center mb-24">
              <h2 className="text-5xl font-inter font-bold text-gray-900 mb-6">
                Our Installation Services
              </h2>
              <div className="w-24 h-[2px] bg-[#FF6B35] mx-auto"></div>
            </div>
            <div className="space-y-16">
              {[
                {
                  id: "fire-alarm",
                  icon: "fa-solid fa-bell",
                  title: "Fire Alarm System Installation",
                  description:
                    "Professional installation of fire alarm systems with comprehensive monitoring and alert capabilities.",
                  features: [
                    "System design and layout planning",
                    "Smoke and heat detector installation",
                    "Control panel setup",
                    // "Emergency lighting integration",
                    "Regular system testing",
                    "Maintenance planning",
                  ],
                  applications:
                    "Commercial Buildings, Healthcare Facilities, Educational Institutions",
                },
                {
                  id: "sprinkler",
                  icon: "fa-solid fa-shower",
                  title: "Sprinkler System Installation",
                  description:
                    "Our expert technicians install high-quality fire sprinkler systems with precision-engineered sprinkler heads for optimal fire suppression coverage and reliability.",
                  features: [
                    "Sprinkler head placement design",
                    "Water flow calculations and testing",
                    // "Anti-freeze system installation",
                    "wet pipe systems installation",
                    "Regular testing setup",
                    "Backflow prevention",
                    "Emergency shut-off systems",
                  ],
                  applications:
                    "Warehouses, Manufacturing Facilities, Retail Spaces",
                },
                {
                  id: "hydrant",
                  icon: "fa-solid fa-fire",
                  title: "Hydrant & Hose Installation",
                  description:
                    "Expert installation of fire hydrants and hose systems for optimal coverage.",
                  features: [
                    "Fire hydrant positioning",
                    "Hose reel system installation",
                    "Water pressure optimization",
                    "Accessibility compliance",
                    "Main water supply connection",
                    // "Frost protection measures",
                    "Regular maintenance planning",
                  ],
                  applications:
                    "Industrial Parks, Campus Environments, Public Spaces",
                },
                {
                  id: "extinguisher",
                  icon: "fa-solid fa-fire-extinguisher",
                  title: "Fire Extinguisher Systems",
                  description:
                    "Professional installation and maintenance of fire extinguisher systems for comprehensive fire safety coverage.",
                  features: [
                    "Fire extinguisher placement",
                    "Regular inspections",
                    "Refill and maintenance",
                    "Compliance certification",
                    "Staff training",
                    "Emergency access planning",
                    "Annual testing",
                  ],
                  applications:
                    "Office Buildings, Schools, Retail Spaces, Industrial Facilities",
                },
                {
                  id: "control",
                  icon: "fa-solid fa-sliders",
                  title: "Control Panel Installation",
                  description:
                    "Professional installation of reliable fire control panel systems.",
                  features: [
                    "Control panel setup",
                    "System monitoring configuration",
                    "Backup power installation",
                    "Emergency controls setup",
                    "System testing",
                    "Staff training",
                    "Regular maintenance",
                  ],
                  applications:
                    "Commercial Buildings, Hotels, Educational Facilities",
                },
                {
                  id: "maintenance",
                  icon: "fa-solid fa-tools",
                  title: "Maintenance Services",
                  description:
                    "Comprehensive maintenance programs for all fire safety systems.",
                  features: [
                    "Regular system inspections",
                    "Performance testing",
                    "Preventive maintenance",
                    "emergency support",
                    "Parts replacement",
                    "System updates",
                    "Staff training",
                  ],
                  applications: "All Commercial & Industrial Facilities",
                },
                {
                  id: "surveillance",
                  icon: "fa-solid fa-video",
                  title: "Security Camera Systems",
                  description:
                    "State-of-the-art surveillance solutions for comprehensive property monitoring and security.",
                  features: [
                    "HD Security Cameras",
                    "24/7 Video Monitoring",
                    "Remote Access Systems",
                    "Motion Detection",
                    "Night Vision Capability",
                    "Video Storage Solutions",
                    "Mobile App Integration",
                  ],
                  applications:
                    "Commercial Buildings, Industrial Facilities, Retail Spaces",
                },
                {
                  id: "access-control",
                  icon: "fa-solid fa-key",
                  title: "Access Control Systems",
                  description:
                    "Advanced access management solutions to secure your premises and monitor entry points.",
                  features: [
                    "Keycard Systems",
                    "Biometric Access",
                    "Door Entry Systems",
                  
                   
                    "Emergency Lockdown",
                    "Access Logs & Reports",
                  ],
                  applications:
                    "Office Buildings, Restricted Areas, Data Centers",
                },
              ].map((service, index) => (
                <div
                  key={service.id}
                  className="service-item opacity-100 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
                >
                  <div
                    className="service-title flex items-center gap-4 cursor-pointer"
                    onClick={() =>
                      setExpandedService(
                        expandedService === service.id ? null : service.id
                      )
                    }
                  >
                    <div className="w-1 h-12 bg-[#FF6B35] rounded"></div>
                    <i
                      className={`${service.icon} text-[#FF6B35] text-3xl`}
                    ></i>
                    <h3 className="text-3xl font-inter font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <i
                      className={`fas fa-chevron-${
                        expandedService === service.id ? "up" : "down"
                      } ml-auto text-[#FF6B35]`}
                    ></i>
                  </div>

                  <div
                    className={`service-content pl-6 mt-6 transition-all duration-300 ${
                      expandedService === service.id ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          Key Features
                        </h4>
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="feature-item flex items-center gap-3"
                            >
                              <i className="fas fa-check text-[#FF6B35] text-sm"></i>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          Common Applications
                        </h4>
                        <p className="text-gray-700">
                          <i className="fas fa-building text-[#FF6B35] mr-2"></i>
                          {service.applications}
                        </p>
                      </div>
                    </div>

                    {service.image && (
                      <div className="mt-4">
                        <img
                          src={service.image.url}
                          alt={service.image.alt}
                          className="w-full rounded-lg shadow-md object-cover"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          {service.image.caption}
                        </p>
                      </div>
                    )}
                  </div>

                  {index < service.length - 1 && (
                    <div className="section-divider h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-16"></div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">
                  About Us
                </span>
                <h2 className="text-4xl font-inter font-bold text-gray-900 mt-3 mb-4">
                  Professional Fire Safety Solutions
                </h2>
                <div className="w-24 h-1 bg-[#FF6B35] mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  More than just a fire and safety company—we provide
                  comprehensive fire protection and safety solutions for
                  businesses of all sizes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-eye text-[#FF6B35] text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To become a leader in fire and security solutions, making
                    safety accessible and efficient for businesses across
                    multiple sectors.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-bullseye text-[#FF6B35] text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver reliable and cost-effective fire safety solutions
                    that prevent disasters before they happen.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-shield-alt text-[#FF6B35] text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quality Solutions
                  </h3>
                  <p className="text-gray-600">
                    Using proven, reliable fire safety equipment and solutions
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-users text-[#FF6B35] text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Customer-First Approach
                  </h3>
                  <p className="text-gray-600">
                    Specializing in customized solutions tailored to meet unique
                    needs across sectors
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-shield-alt text-[#FF6B35] text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Comprehensive Protection
                  </h3>
                  <p className="text-gray-600">
                    Ensuring safety and compliance across industrial,
                    commercial, and residential environments
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Who We Serve
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: "fa-industry", title: "Industries" },
                    { icon: "fa-building", title: "Corporate Businesses" },
                    { icon: "fa-home", title: "Residential Societies" },
                    { icon: "fa-landmark", title: "Government Organizations" },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className={`fas ${item.icon} text-[#FF6B35]`}></i>
                      </div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center bg-[#FF6B35]/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Commitment to Safety
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  At Sharlik Solutions, we understand that fire safety is not
                  just about compliance—it's about saving lives and protecting
                  valuable assets. We work tirelessly to ensure our clients have
                  effective fire protection systems in place.
                </p>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="py-24 bg-gradient-to-b from-gray-50 to-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">
                  GET IN TOUCH
                </span>
                <h2 className="text-4xl font-inter font-bold text-gray-900 mt-3 mb-4">
                  Contact Our Team
                </h2>
                <div className="w-24 h-1 bg-[#FF6B35] mx-auto mb-6"></div>
                <p className="text-lg text-gray-600">
                  Our expert team is here to help with your fire safety needs
                </p>
                <p className="text-base text-gray-500 mt-2">
                  Business Hours: Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-[#FF6B35] px-6 py-8 text-white">
                      <h3 className="text-2xl font-bold mb-4">
                        Contact Information
                      </h3>
                      <p className="text-white/80 mb-4">
                        Reach out to us for assistance with your fire safety
                        needs
                      </p>
                    </div>

                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-phone text-[#FF6B35] text-xl"></i>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Sales Inquiries
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              +91 9289471417
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-wrench text-[#FF6B35] text-xl"></i>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Installation Support
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              +91 8923624656
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-tools text-[#FF6B35] text-xl"></i>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Technical Support
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              +91 8171939629
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-envelope text-[#FF6B35] text-xl"></i>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email Us</p>
                          <a
                            href="mailto:info@sharliksolutions.com"
                            className="text-lg font-semibold text-gray-900 hover:text-[#FF6B35] transition-colors"
                          >
                            info@sharliksolutions.com
                          </a>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-4">
                          Connect With Us
                        </p>
                        <div className="flex space-x-4">
                          <a
                            href="#"
                            className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-tools text-[#FF6B35] text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Installation Services
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Professional installation of fire safety systems
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Fire Alarm Systems
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Sprinkler Systems
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Emergency Lighting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-wrench text-[#FF6B35] text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Maintenance Services
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Regular maintenance and inspections
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Scheduled Maintenance
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Preventive Maintenance
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Emergency Repairs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-exclamation-triangle text-[#FF6B35] text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Emergency Services
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Quick response emergency support
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Rapid Response
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Available during business hours
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Expert Solutions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-comments text-[#FF6B35] text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Consultation Services
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Expert advice and planning
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Safety Audits
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Compliance Review
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-check text-[#FF6B35] mr-2"></i>
                            Implementation Planning
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="block mb-4"
                >
                  <img
                    src="https://ucarecdn.com/77822f35-7b1c-4dc0-98a0-b4413350c8ce/-/format/auto/"
                    alt="Sharlik Automations Logo"
                    className="h-24"
                  />
                </a>
                <p className="text-gray-600">
                  Professional fire safety and security system installation and
                  maintenance services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-inter font-bold text-gray-900 mb-4">
                  Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("services");
                      }}
                      className="text-gray-600 hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      System Installation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("services");
                      }}
                      className="text-gray-600 hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      Maintenance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("services");
                      }}
                      className="text-gray-600 hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      Emergency Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-inter font-bold text-gray-900 mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                      }}
                      className="text-gray-600 hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("services");
                      }}
                      className="text-gray-600 hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contact");
                      }}
                      className="text-gray-600 hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-inter font-bold text-gray-900 mb-4">
                  Connect
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300"
                  >
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
              © 2025 Sharlik Automations. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-[#FF6B35] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sales Inquiries</p>
                    <a
                      href="tel:+919289471417"
                      className="text-lg font-semibold text-gray-900 hover:text-[#FF6B35]"
                    >
                      +91 9289471417
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-wrench text-[#FF6B35] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Installation Support
                    </p>
                    <a
                      href="tel:+918923624656"
                      className="text-lg font-semibold text-gray-900 hover:text-[#FF6B35]"
                    >
                      +91 8923624656
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-tools text-[#FF6B35] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Technical Support</p>
                    <a
                      href="tel:+918171939629"
                      className="text-lg font-semibold text-gray-900 hover:text-[#FF6B35]"
                    >
                      +91 8171939629
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-[#FF6B35] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <a
                      href="mailto:info@sharliksolutions.com"
                      className="text-lg font-semibold text-gray-900 hover:text-[#FF6B35]"
                    >
                      info@sharliksolutions.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Business Hours</p>
                <p className="text-gray-600">
                  Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-y: scroll;
        }

        body.modal-open {
          overflow: hidden;
        }
        
        .service-item {
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;
        }

        .feature-item {
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateX(5px);
        }

        .section-divider {
          transition: all 0.3s ease;
        }

        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .contact-card {
          transform: translateY(0);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-card-hover {
          transition: all 0.3s ease;
        }

        .contact-card-hover:hover {
          transform: translateY(-2px);
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: #FF6B35;
          color: white;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;