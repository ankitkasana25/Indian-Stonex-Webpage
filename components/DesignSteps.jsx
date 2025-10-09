import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [showModal]);

  const stepDetails = [
    {
      id: 1,
      title: "Share Your Vision",
      description: "Tell us about your space and spiritual preferences. We'll understand your needs and create a personalized plan.",
      details: [
        { title: "Quick Consultation", description: "Share your space details and requirements through a simple 5-minute conversation." },
        { title: "Custom Plan Creation", milestone: "Milestone: Personalized Design Strategy", description: "We create a tailored design plan based on your space, budget, and spiritual preferences." }
      ]
    },
    {
      id: 2,
      title: "Design & Visualize",
      description: "See your dream pooja room come alive with stunning 3D designs before we start building.",
      details: [
        { title: "3D Design Creation", description: "Get realistic 3D visualizations showing exactly how your pooja room will look in your space." },
        { title: "Material Selection", milestone: "Milestone: Design Finalization", description: "Choose from premium materials and finishes that match your style and budget." },
        { title: "Final Approval", description: "Review and approve the complete design. We make changes until you're completely satisfied." }
      ]
    },
    {
      id: 3,
      title: "Craft & Create",
      description: "Our skilled artisans bring your design to life with precision and attention to detail.",
      details: [
        { title: "Expert Craftsmanship", description: "Watch as master craftsmen transform raw materials into your beautiful pooja room." },
        { title: "Quality Assurance", milestone: "Milestone: Quality Check", description: "Every piece undergoes rigorous quality checks to ensure perfection." },
        { title: "Progress Updates", description: "Receive regular photos and videos showing the creation process." }
      ]
    },
    {
      id: 4,
      title: "Delivery & Setup",
      description: "We safely deliver and help set up your perfect pooja room, ready for your spiritual practice.",
      details: [
        { title: "Secure Packaging", description: "Your temple is carefully packaged for complete protection during transit." },
        { title: "Worldwide Delivery", description: "We handle all logistics for safe delivery anywhere across the globe." },
        { title: "Easy Installation", milestone: "Milestone: Setup Completion", description: "Get guided support for easy setup - we ensure everything is perfect." },
        { title: "After-Service Support", description: "Continuous support to address any questions after your pooja room is installed." }
      ]
    }
  ];

  const currentStep = stepDetails[activeStep - 1] || stepDetails[0];
  const currentModalStep = stepDetails[modalStep - 1] || stepDetails[0];
  const tabNames = ["Share", "Design", "Create", "Delivery"];

  return (
    <div className="bg-white py-12 px-4 md:px-6 lg:container lg:mx-auto">
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        >
          Create Your Sacred Space in 4 Simple Steps
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          From sharing your vision to enjoying your perfect pooja room - we make the journey seamless and delightful.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Steps */}
        <div className="w-full md:w-2/5 lg:w-2/5 relative">
          <div className="space-y-8 relative z-10">
            {stepDetails.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-start p-6 rounded-lg cursor-pointer transition-all ${
                  activeStep === step.id ? 'bg-amber-50 shadow-md' : 'bg-white'
                } border border-gray-100 hover:bg-amber-50 hover:shadow-md transform hover:-translate-y-1`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeStep === step.id ? 'bg-theme' : 'bg-amber-500'
                    } font-bold text-lg text-white transition-all duration-300`}
                    style={{ backgroundColor: 'var(--color-theme)' }}
                  >
                    {step.id}
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section - Details */}
        {isLargeScreen && (
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 lg:w-3/5 bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{currentStep.title}</h3>
              <p className="text-gray-600">{currentStep.description}</p>
            </div>

            {currentStep.details.length > 0 && (
              <>
                <hr className="my-6 border-gray-200" />
                <div className="space-y-6">
                  {currentStep.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="flex"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: 'var(--color-theme)' }}></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{detail.title}</h4>
                        {detail.milestone && (
                          <div className="text-sm text-theme font-medium my-2" style={{ color: 'var(--color-theme)' }}>
                            {detail.milestone}
                          </div>
                        )}
                        <p className="text-gray-600 mt-1">{detail.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
