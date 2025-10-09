export default function ImageTextSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image container with controlled sizing */}
          <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center items-center">
            <div 
              className="bg-cover bg-center w-full h-64 md:h-96 mx-auto"
              style={{ 
                backgroundImage: "url(https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faboutimgtsa.5e3fe6ea.webp&w=3840&q=75)",
                maxWidth: '500px'
              }}
            ></div>
          </div>
          
          {/* Text Column - appears first on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-12 mb-8 md:mb-0 flex items-center">
            <div className="text-content text-center md:text-left max-w-lg mx-auto md:mx-0 py-6 md:py-0">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Be a part of the Indian Stonex Design Hub Community
              </h2>
              <p className="text-lg">
                Our specialized B2B team is dedicated to supporting your business, working alongside you to create tailored solutions for your clients, regardless of the project size. By partnering with us, you'll unlock exclusive advantages designed to enhance your experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}