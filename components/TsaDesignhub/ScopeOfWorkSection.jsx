export default function ScopeOfWorkSection() {
  const workItems = [
    {
      id: 1,
      image: "https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2ddesign.3c9fbd14.png&w=3840&q=75",
      title: "2D Design Conceptualisation"
    },
    {
      id: 2,
      image: "https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3dvirtual.a42b9bb3.png&w=3840&q=75",
      title: "3D Virtual Experience"
    },
    {
      id: 3,
      image: "https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsiteMeasurements.c81e3184.png&w=3840&q=75",
      title: "Site Measurements"
    },
    {
      id: 4,
      image: "https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSiteSupervison.96f4ded3.png&w=3840&q=75",
      title: "Site Supervison"
    },
    {
      id: 5,
      image: "https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProjectManagement.07fb22b6.png&w=3840&q=75",
      title: "Project Management"
    },
    {
      id: 6,
      image: "https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogisticsInstalltaion.e24b3cae.png&w=3840&q=75",
      title: "Logistics & Installation"
    }
  ];

  return (
    <section className="py-16 bg-[#fffbf0]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-center mb-12">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Scope of work</h2>
          </div>
        </div>
        
        {/* Work Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="scope-card w-full bg-transparent rounded-lg overflow-hidden">
                {/* Image Container with exact dimensions */}
                <div 
                  className="w-[55px] h-[55px] relative mx-auto mb-4"
                  style={{ 
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                
                {/* Title */}
                <div className="p-2 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}