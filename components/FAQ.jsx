import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of marble do you use for your stone temples?",
      answer:
        "We work with a variety of premium marbles including <strong>Makrana White Marble</strong>, <strong>Italian Carrara Marble</strong>, and <strong>Vietnam White Marble</strong>. Each piece is carefully selected for its quality, durability, and aesthetic appeal to create stunning temple designs.",
    },
    {
      question: "How long does the temple design and installation process take?",
      answer:
        "The complete process from design consultation to final installation typically takes <strong>4-8 weeks</strong>, depending on the complexity of the design, size of the temple, and customization requirements.",
    },
    {
      question: "Do you provide custom design services for marble temples?",
      answer:
        "Absolutely! We specialize in <strong>custom marble temple designs</strong> tailored to your space, preferences, and spiritual requirements. Our design team works closely with you to create a unique piece that complements your home's aesthetics.",
    },
    {
      question: "What is the price range for your marble temples?",
      answer:
        "Our marble temples range from <strong>₹25,000 to ₹2,00,000+</strong> depending on size, marble quality, design complexity, and customization. We offer temples for various budgets while maintaining exceptional craftsmanship.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Yes, we provide <strong>professional installation services</strong> across the city. Our experienced team ensures proper placement, alignment, and finishing touches to make your temple the centerpiece of your home.",
    },
    {
      question: "How do I maintain and clean my marble temple?",
      answer:
        "Marble temples require gentle care. We recommend <strong>dusting regularly with a soft cloth</strong> and <strong>cleaning with pH-neutral stone cleaners</strong>. Avoid acidic cleaners and harsh chemicals. We provide complete maintenance guidelines with every temple.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "Yes! You can visit our <strong>showroom to see sample temples</strong> or browse our portfolio of completed projects <a href='https://stonemarbletemple.com/portfolio' rel='noopener noreferrer' target='_blank' class='text-amber-600 hover:text-amber-700 underline'>here</a>. We have photos and videos showcasing our craftsmanship.",
    },
    {
      question: "What makes your marble temples different from others?",
      answer:
        "Our temples feature <strong>hand-carved intricate designs</strong>, <strong>premium quality marble</strong>, and <strong>expert craftsmanship</strong> passed down through generations. We focus on both spiritual significance and artistic excellence in every piece we create.",
    },
  ];

  return (
    <section id="faq" className="bg-amber-50 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our temples? Explore answers below.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl shadow-lg border border-gray-100 bg-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}
            >
              {/* Question */}
              <button
                className="flex justify-between items-center w-full h-48 px-6 py-5 text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span
                  className={`font-semibold text-lg transition-colors duration-300 ${
                    activeIndex === index ? "text-amber-600" : "text-gray-800"
                  }`}
                >
                  {index + 1}. {item.question}
                </span>
                {activeIndex === index ? (
                  <FiChevronUp className="h-6 w-6 text-amber-600 transition-transform duration-300" />
                ) : (
                  <FiChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-300" />
                )}
              </button>

              {/* Animated Answer Overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full bg-white p-6 overflow-auto rounded-xl shadow-lg transition-all duration-500 ease-in-out transform ${
                  activeIndex === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 -z-10"
                }`}
              >
                <div className="flex flex-col h-full">
                  <div
                    className="text-gray-700 leading-relaxed overflow-auto"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                  <button
                    className="mt-auto self-end mt-4 text-amber-600 font-semibold hover:underline"
                    onClick={() => setActiveIndex(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .prose a {
          font-weight: 600;
          text-decoration: underline;
        }
        .prose strong {
          color: #374151;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
