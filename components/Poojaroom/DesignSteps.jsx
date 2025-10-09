import { useState, useEffect } from 'react';

export default function DesignSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const stepDetails = [
    {
      id: 1,
      title: "Lets connected one on one",
      description: "This is the first step where we connect with you one on one to understand your requirements and preferences.",
      details: [
        {
          title: "Fill Form",
          description: "Please fill the form and provide us with the necessary details about your pooja room design requirements."
        },
        {
          title: "Connect over a meet",
          milestone: "Milestone: Concept Discovery Session",
          description: "Join us in an interactive session to discuss your Pooja Space and design ideas with our experts. Book a time that suits you best."
        }
      ]
    },
    {
      id: 2,
      title: "Start With your Design",
      description: "In this step, we collaborate with you to create a design that meets your vision and requirements.",
      details: [
        {
          title: "Pay the Design Fee",
          description: "If you're happy with the session and we're aligned on your needs, choose a design plan to start."
        },
        {
          title: "2D Design",
          milestone: "Milestone: 2D Design Fee",
          description: "Our expert designers will create a detailed 2D plan for your temple, showcasing the style and placement of deities."
        },
        {
          title: "3D Design",
          milestone: "Milestone: 3D Design Fee",
          description: "Once the 2D plan is finalized, visualize your dream space with a 3D model."
        },
        {
          title: "Finalize Your Design",
          description: "Agree on a design to move forward with production."
        }
      ]
    },
    {
      id: 3,
      title: "Place The Order",
      description: "Once the design is finalized, you can place the order for your customized pooja room.",
      details: [
        {
          title: "Start the Order Process",
          description: "Pay 50% of the final quote to get started."
        },
        {
          title: "The Work Commences",
          description: "Track your project status through our portal."
        }
      ]
    },
    {
      id: 4,
      title: "Approval",
      description: "Before proceeding, we ensure that everything is approved by you to meet your expectations.",
      details: [
        {
          title: "Receive Updates",
          description: "We'll keep you updated on your Dream Temple's progress. You'll have the chance to provide feedback and approvals as needed."
        },
        {
          title: "Share Your Approval",
          milestone: "Milestone: Pay the remaining 50%",
          description: "Approve the final pictures of the temple to proceed to the next stage."
        }
      ]
    },
    {
      id: 5,
      title: "Delivery & Installation",
      description: "Finally, we deliver and install your pooja room at your desired location.",
      details: [
        {
          title: "International Packaging",
          description: "Once the full payment is received, we'll carefully pack your order and share videos of the process."
        },
        {
          title: "Dispatch from Our Production",
          description: "Your shipment will be dispatched, ready to reach your doorstep."
        },
        {
          title: "Transit Updates",
          description: "Stay informed about your shipment's journey."
        },
        {
          title: "Unpacking and Installation",
          description: "When your shipment arrives, we'll schedule a call to assist you with unpacking and installation."
        }
      ]
    }
  ];

  const openModal = (stepId) => {
    setModalStep(stepId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const tabNames = ["Connect", "Design", "Order", "Approval", "Delivery"];

  return (
    <div className="bg-white py-12 px-4 md:px-6 lg:container lg:mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Design your Pooja Room in 5 Easy Steps</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Create your dream pooja room with us. We will guide you through 5 easy steps to get your pooja room designed and delivered to your doorstep.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Steps without connecting dashed line */}
        <div className="w-full md:w-2/5 lg:w-2/5 relative">
          <div className="space-y-8 relative z-10">
            {stepDetails.map((step, index) => (
              <div 
                key={step.id}
                className={`flex items-start p-6 rounded-lg cursor-pointer transition-all ${
                  activeStep === step.id ? 'bg-amber-50 shadow-md' : 'bg-white'
                } border border-gray-100 hover:bg-amber-50 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="relative flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeStep === step.id ? 'bg-amber-600' : 'bg-amber-500'
                  } font-bold text-lg text-white transition-all duration-300`} style={{backgroundColor: '#a08f0f'}}>
                    {step.id}
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                  
                  {!isLargeScreen && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(step.id);
                      }}
                      className="mt-4 text-amber-700 font-medium hover:text-amber-800 flex items-center transition-colors duration-300"
                      style={{color: '#a08f0f'}}
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Details (shown only on medium screens and above) */}
        {isLargeScreen && (
          <div className="w-full md:w-3/5 lg:w-3/5 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{stepDetails[activeStep - 1].title}</h3>
              <p className="text-gray-600">{stepDetails[activeStep - 1].description}</p>
            </div>

            {stepDetails[activeStep - 1].details.length > 0 && (
              <>
                <hr className="my-6 border-gray-200" />
                
                <div className="space-y-6">
                  {stepDetails[activeStep - 1].details.map((detail, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-3 h-3 rounded-full bg-amber-500 mt-2" style={{backgroundColor: '#a08f0f'}}></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{detail.title}</h4>
                        {detail.milestone && (
                          <div className="text-sm text-amber-700 font-medium my-2" style={{color: '#a08f0f'}}>{detail.milestone}</div>
                        )}
                        <p className="text-gray-600 mt-1">{detail.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Mobile Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50 md:hidden" style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h4 className="text-xl font-semibold text-gray-800">Design your Pooja Room in 5 Easy Steps</h4>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex border-b border-gray-200">
              {tabNames.map((name, index) => (
                <div 
                  key={index}
                  className={`flex-1 text-center py-3 px-2 text-sm font-medium ${
                    modalStep === index + 1 ? 'text-amber-700 border-b-2 border-amber-600' : 'text-gray-500'
                  }`}
                  style={modalStep === index + 1 ? {color: '#a08f0f', borderBottomColor: '#a08f0f'} : {}}
                  onClick={() => setModalStep(index + 1)}
                >
                  {name}
                </div>
              ))}
            </div>
            
            <div className="p-5">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{stepDetails[modalStep - 1].title}</h3>
                <p className="text-gray-600">{stepDetails[modalStep - 1].description}</p>
              </div>

              {stepDetails[modalStep - 1].details.length > 0 && (
                <>
                  <hr className="my-6 border-gray-200" />
                  
                  <div className="space-y-6">
                    {stepDetails[modalStep - 1].details.map((detail, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-3 h-3 rounded-full mt-2" style={{backgroundColor: '#a08f0f'}}></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{detail.title}</h4>
                          {detail.milestone && (
                            <div className="text-sm font-medium my-2" style={{color: '#a08f0f'}}>{detail.milestone}</div>
                          )}
                          <p className="text-gray-600 mt-1">{detail.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}