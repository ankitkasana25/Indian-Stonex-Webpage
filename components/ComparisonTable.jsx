import { FaCheck, FaTimes } from 'react-icons/fa';

const ComparisonTable = () => {
  const tableData = [
    {
      feature: "Artisanal Expertise",
      tsa: "25+ Years Experience",
      local: "May Vary",
      tsaHasIcon: true,
      localHasIcon: true
    },
    {
      feature: "Customized Design",
      tsa: "Tradition & Modernity",
      local: "Limited Options",
      tsaHasIcon: true,
      localHasIcon: true
    },
    {
      feature: "Durability and Quality",
      tsa: "Assured",
      local: "Questionable",
      tsaHasIcon: true,
      localHasIcon: true
    },
    {
      feature: "Established Trust",
      tsa: "Proven Reliability",
      local: "Uncertain",
      tsaHasIcon: true,
      localHasIcon: true
    },
    {
      feature: "End to End Support",
      tsa: "From Design to Installation",
      local: "Limited",
      tsaHasIcon: true,
      localHasIcon: true
    },
    {
      feature: "Marble Expertise",
      tsa: "Specialized Knowledge",
      local: "General Know-how",
      tsaHasIcon: true,
      localHasIcon: true
    },
    {
      feature: "Global Standards Compliance",
      tsa: "International Quality",
      local: "Unverified",
      tsaHasIcon: true,
      localHasIcon: true
    }
  ];

  return (
    <div className="bg-[#fffbf0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="row justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">The Indian StonexDifference</h2>
          </div>
          <div className="w-full max-w-6xl mx-auto">
            {/* Scrollable container for the table */}
            <div className="overflow-x-auto rounded-lg ">
              <table className="w-full border-collapse table-fixed min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-transparent border border-dashed border-gray-600 w-[200px] max-w-[200px]">
                      <div className="text-base font-semibold">Feature</div>
                    </th>
                    <th className="p-4 text-left bg-black text-white border border-dashed border-gray-600 w-[200px] max-w-[200px]">
                      <div className="text-base font-semibold">Indian Stonex Stone Arts India</div>
                    </th>
                    <th className="p-4 text-left bg-transparent border border-dashed border-gray-600 w-[200px] max-w-[200px]">
                      <div className="text-base font-semibold">Local Vendors</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-4 bg-transparent text-gray-800 font-medium border border-dashed border-gray-600 w-[200px] max-w-[200px] text-sm">
                        {item.feature}
                      </td>
                      <td className="p-4 bg-white text-left border border-dashed border-gray-600 w-[200px] max-w-[200px] text-sm">
                        <div className="flex items-center space-x-2">
                          {item.tsaHasIcon && <FaCheck className="text-green-600 flex-shrink-0" />}
                          <span>{item.tsa}</span>
                        </div>
                      </td>
                      <td className="p-4 bg-transparent text-left border border-dashed border-gray-600 w-[200px] max-w-[200px] text-sm">
                        <div className="flex items-center space-x-2">
                          {item.localHasIcon && <FaTimes className="text-red-600 flex-shrink-0" />}
                          <span>{item.local}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar styling for better appearance */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
};

export default ComparisonTable;