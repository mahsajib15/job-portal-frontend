import { useEffect, useState } from "react";
import { Search, UserIcon, X } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Departments");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
  };

  const handleSearch = () => {
    console.log("Searching for:", query, "in category:", category);
  };

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/ServiceSection.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setServices(data.services);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <>
      <div className="bg-gray-400 h-40 fixed inset-x-0 z-20 flex justify-center items-center container">
        <div className="mt-40 mb-24 flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-2xl">
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-100 border-r border-gray-300 px-4 py-2 text-sm focus:outline-none"
            >
              <option>All Departments</option>
              <option>Refrigerator Service</option>
              <option>TV Repair Service</option>
              <option>AC Repair Service</option>
              <option>Washing Machine Service</option>
              <option>Oven Repair Service</option>
              <option>Geyser Repair Services</option>
              <option>Movies</option>
              <option>Electricians</option>
              <option>Grocery</option>
              <option>Electronics</option>
              <option>Laptop Repair Service</option>
              <option>Desktop Repair Service</option>
              <option>MacBook Service</option>
              <option>Printer Repair Service</option>
              <option>IPS Service</option>
              <option>Water Purifier Service</option>
              <option>Banquet Halls</option>
              <option>Bridal Requisite</option>
              <option>Caterers</option>
              <option>Beauty Parlours</option>
              <option>Spa & Massages</option>
              <option>Salons</option>
            </select>
          </div>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search Services"
            className="w-full px-4 py-2 outline-none text-sm"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="text-gray-500 hover:text-gray-700 px-2"
            >
              <X size={20} />
            </button>
          )}
          <button
            onClick={handleSearch}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2"
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* card items */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 container mb-20">
        {services.map((category) =>
          category.items.map((item) => (
            <div
              key={item.id}
              className="border border-red-500 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 flex items-center justify-center">
                <img
                  src={item.image}
                  className="h-48 w-full object-cover"
                  alt={item.name}
                />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 px-5 text-white bg-red-500 rounded-md text-center">
                    {item.description}
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">{item.name}</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">{item.category}</p>
                      <p className="text-sm">{item.location}</p>
                    </div>
                  </div>
                  <div className="text-sm">{item.date}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SearchBar;
