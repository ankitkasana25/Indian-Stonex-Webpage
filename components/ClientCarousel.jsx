import { useState, useEffect, useRef } from 'react';

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleItems, setVisibleItems] = useState(8); // Default for desktop
  const containerRef = useRef(null);
  
  // Client logos data
   const clients = [
    { id: 1, image: "/client1.jpg" },
    { id: 2, image: "/client2.jpg" },
    { id: 3, image: "/client3.jpg" },
    { id: 4, image: "/client4.jpg" },
    { id: 5, image: "/client14.jpg" },
    { id: 6, image: "/client6.jpg" },
    { id: 7, image: "/client7.jpg" },
    { id: 8, image: "/hfcl.svg" },
    { id: 9, image: "/client9.jpg" },
    { id: 10, image: "/client10.jpg" },
    { id: 11, image: "/client11.jpg" },
  ];

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(8); // Desktop
      } else if (window.innerWidth >= 768) {
        setVisibleItems(6); // Tablet
      } else if (window.innerWidth >= 640) {
        setVisibleItems(4); // Small tablet
      } else {
        setVisibleItems(3); // Mobile
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  // Duplicate the clients array to create seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        // When we reach the end of the original array, reset to 0
        if (prevIndex >= clients.length - 1) {
          // Wait for transition to complete before resetting
          setTimeout(() => {
            setCurrentIndex(0);
          }, 50);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [clients.length, isPaused, visibleItems]);

  // Handle mouse events to pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="container-fluid mt-5 px-4 md:px-6 mx-auto">
      <div className="row">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Our Clients
          </h2>
        </div>
        
        <div className="col-12 relative overflow-hidden">
          <div 
            className="flex"
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              transition: 'transform 0.8s ease-in-out',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="w-full h-20 md:h-28  rounded-lg flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div 
                    className="w-full h-full bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${client.image})` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for a smoother infinite effect */}
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* Mobile indicator */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2">
          {Array.from({ length: Math.min(5, clients.length) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentIndex % clients.length === index ? '' : ''
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}