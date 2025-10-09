import React from 'react';

const HowItWorks = () => {
  const baseUrl = "https://www.indianstonex.com";
  
  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      subtitle: "Let's Connect One on One",
      image: "/_next/static/media/image1.84c47ee9.gif",
      description: "We begin by understanding your vision and requirements for the perfect sacred space",
      items: [
        {
          subtitle: "Complete Our Detailed Form",
          description: "Share your requirements, preferences, and vision for your dream temple space",
          button: "Fill Detailed Form",
          milestone: ""
        },
        {
          subtitle: "Personalized Design Session",
          description: "Schedule a one-on-one consultation with our design experts to discuss your spiritual space",
          button: "Book Consultation",
          milestone: "Milestone: Concept Discovery Completed"
        }
      ]
    },
    {
      id: 2,
      title: "Design Development",
      subtitle: "Bringing Your Vision to Life",
      image: "/_next/static/media/image2.79a73f73.gif",
      description: "Transform your ideas into detailed, visual designs with our expert team",
      items: [
        {
          subtitle: "Design Agreement & Fee",
          description: "Secure your design phase with our comprehensive design package",
          button: "View Design Plans",
          milestone: ""
        },
        {
          subtitle: "2D Technical Drawings",
          description: "Receive detailed floor plans and elevation drawings for precise planning",
          button: "",
          milestone: "Milestone"
        },
        {
          subtitle: "3D Visualizations",
          description: "Experience your temple in stunning 3D before construction begins",
          button: "",
          milestone: "Milestone: 3D Design Fee Applied"
        },
        {
          subtitle: "Final Design Approval",
          description: "Review and approve the complete design package",
          button: "Approve Design",
          milestone: ""
        }
      ]
    },
    {
      id: 3,
      title: "Project Commencement",
      subtitle: "Placing Your Order",
      image: "/_next/static/media/image3.493b9a3b.gif",
      description: "Begin the creation process with secure payment and project initiation",
      items: [
        {
          subtitle: "Initial Payment",
          description: "Secure your project timeline with 50% advance payment",
          button: "Make Payment",
          milestone: ""
        },
        {
          subtitle: "Project Kick-off",
          description: "Your dedicated project manager begins coordinating all aspects",
          button: "Track Project",
          milestone: "Milestone: Production Started"
        }
      ]
    },
    {
      id: 4,
      title: "Craftsmanship Phase",
      subtitle: "Precision Production",
      image: "/_next/static/media/image4.ee79520e.gif",
      description: "Watch your temple take shape through skilled craftsmanship and quality materials",
      items: [
        {
          subtitle: "Regular Progress Updates",
          description: "Receive weekly updates with photos and videos of your temple's progress",
          button: "View Updates",
          milestone: ""
        },
        {
          subtitle: "Final Quality Approval",
          description: "Approve the completed temple before packaging and dispatch",
          button: "Give Approval",
          milestone: "Milestone: Balance 50% Payment Due"
        }
      ]
    },
    {
      id: 5,
      title: "Secure Dispatch",
      subtitle: "Preparing for Journey",
      image: "/_next/static/media/image5.0083fac6.gif",
      description: "Expert packaging and secure dispatch ensuring safe delivery worldwide",
      items: [
        {
          subtitle: "International-Grade Packaging",
          description: "Specialized packaging designed for international shipping safety",
          button: "View Packaging",
          milestone: ""
        },
        {
          subtitle: "Secure Dispatch Process",
          description: "Your temple begins its journey with complete tracking visibility",
          button: "Track Shipment",
          milestone: "Milestone: Shipment Dispatched"
        }
      ]
    },
    {
      id: 6,
      title: "Final Installation",
      subtitle: "Completing Your Vision",
      image: "/_next/static/media/image1.84c47ee9.gif",
      description: "Professional guidance for perfect installation and setup of your sacred space",
      items: [
        {
          subtitle: "Real-time Transit Monitoring",
          description: "Track your shipment's journey with regular updates",
          button: "Monitor Delivery",
          milestone: ""
        },
        {
          subtitle: "Expert Installation Support",
          description: "Comprehensive guidance for perfect installation and setup",
          button: "Schedule Support",
          milestone: "Milestone: Project Successfully Completed"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="font-semibold text-amber-600">Process</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A seamless journey from concept to completion, ensuring your sacred space is crafted 
            with precision, care, and spiritual significance.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="mb-16 last:mb-0">
              {/* Payment Complete Banner after step 4 */}
              {step.id === 4 && (
                <div className="my-12 py-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center justify-center">
                      <img 
                        alt="Checkmark" 
                        width="40" 
                        height="40" 
                        className="mr-4"
                        src={`${baseUrl}/_next/static/media/check.728a30db.png`}
                      />
                      Payment Complete! Your Temple is Ready for Dispatch
                    </h2>
                    <p className="text-amber-100 mt-2 text-lg">
                      Thank you for your trust. We're preparing your sacred space for its journey to you.
                    </p>
                  </div>
                </div>
              )}

              {/* Step Container */}
              <div className={`flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image Section */}
                <div className="lg:w-2/5 relative">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${baseUrl}${step.image})` }}
                    ></div>
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                      {step.id}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:w-3/5 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-lg text-amber-600 font-medium mb-3">{step.subtitle}</p>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {step.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.subtitle}</h4>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            {item.milestone && (
                              <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-md">
                                {item.milestone}
                              </div>
                            )}
                          </div>
                          
                          {/* {item.button && (
                            <button className="bg-gray-900 hover:bg-black text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex-shrink-0 whitespace-nowrap">
                              {item.button}
                            </button>
                          )} */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;