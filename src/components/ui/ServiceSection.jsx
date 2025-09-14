import React, { useEffect, useState } from "react";

function ServiceSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/ServiceSection.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); 
        setServices(data.services);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <>
      
      <div className="container mx-auto px-4 py-5">
      <hr />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.length > 0 ? (
            services.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <div className="grid grid-cols-3 gap-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <p className="mt-2 text-sm font-medium">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading services...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
