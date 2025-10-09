export default function HelpSection() {
  return (
    <section className="py-16 bg-[#fffbf0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          
          {/* Text Content - appears first on mobile */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">We Help With:</h2>
              <ul className="space-y-3 text-lg">
                <li>• Special Pricing tailored to your needs.</li>
                <li>• Private Shopping Experience for you and your clients, ensuring a personalized touch.</li>
                <li>• Product Information & Sample Requests to help you make informed decisions.</li>
                <li>• Inventory Availability & Order Placement with seamless access to our products.</li>
                <li>• Installation Services for a hassle-free experience for your clients.</li>
                <li>• 2D Product Configurator for you and your clients to customize designs in real-time.</li>
              </ul>
              <div className="mt-8 inline-block px-8 py-3 bg-black text-white cursor-pointer hover:bg-gray-800 transition-colors">
                Join Now
              </div>
            </div>
          </div>
          
          {/* Image as background - appears second on mobile */}
          <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto"
               style={{ 
                 backgroundImage: "url(https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage1.84c47ee9.gif&w=3840&q=75)",
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 minHeight: '400px'
               }}>
          </div>
        </div>
      </div>
    </section>
  );
}