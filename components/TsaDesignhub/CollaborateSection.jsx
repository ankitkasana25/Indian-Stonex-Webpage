export default function CollaborateSection() {
  return (
    <section className="py-16">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex justify-center">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Why Collaborate with Indian Stonex Stone Arts India?
            </h2>
          </div>
        </div>
        
        {/* First Row - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto bg-cover bg-center mb-6 lg:mb-0"
               style={{ 
                 backgroundImage: "url(https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_img.1baa6cfc.webp&w=3840&q=75)",
                 minHeight: '400px'
               }}>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="text-content text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Integrated Solutions for Pooja Rooms</h3>
              <p className="text-lg">
                At Indian Stonex Stone Arts India, we provide complete solutions for creating divine pooja spaces. From designing stunning temples to crafting intricate murtis, we are your one-stop destination for heavenly pooja rooms. Our experienced team will collaborate with you to create both 2D and 3D layouts for your clients' pooja rooms, ensuring every detail is flawless. From the flooring and walls to the temple, murtis, and everything in between, we manage the entire process in-house—from concept to production—and offer professional installation services to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
        
        {/* Second Row - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="text-content text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Special Pricing for Members</h2>
              <p className="text-lg">
                We deeply value our partnerships with architects and interior designers. To help you deliver outstanding projects, we offer special pricing packages tailored specifically for our design partners. By collaborating with us, you'll gain access to exclusive, competitive rates and unique design options that will elevate your work.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 aspect-video lg:aspect-auto bg-cover bg-center mb-6 lg:mb-0 lg:pl-12"
               style={{ 
                 backgroundImage: "url(https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcenterimg2.f237b182.webp&w=3840&q=75)",
                 minHeight: '400px'
               }}>
          </div>
        </div>
        
        {/* Third Row - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto bg-cover bg-center mb-6 lg:mb-0"
               style={{ 
                 backgroundImage: "url(https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhowitwork_bannerimg.a2b3295a.webp&w=3840&q=75)",
                 minHeight: '400px'
               }}>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="text-content text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Exclusive Lookbook Access</h3>
              <p className="text-lg">
                Although we do not share a public catalog, our Indian StonexDesign Hub offers you exclusive access to all of our ongoing projects. As a partner, you'll have insider access to our latest designs and concepts, ensuring your pooja room projects are always at the forefront of innovation and quality.
              </p>
            </div>
          </div>
        </div>
        
        {/* Fourth Row - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="text-content text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">2D Product Configurator</h3>
              <p className="text-lg">
                We recognize the challenges of managing client approvals and design revisions. To make this process smoother, we've developed a 2D Product Configurator. This tool allows you to customize temple designs in real-time, with over 100 options to choose from, helping you streamline client approvals and save time on revisions.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 aspect-video lg:aspect-auto bg-cover bg-center mb-6 lg:mb-0 lg:pl-12"
               style={{ 
                 backgroundImage: "url(https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faboutimg.74a3ccde.webp&w=3840&q=75)",
                 minHeight: '400px'
               }}>
          </div>
        </div>
      </div>
    </section>
  );
}