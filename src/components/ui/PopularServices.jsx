import { useRef } from 'react';

const services = [
  { title: 'Water Purifier Service', color: 'bg-green-700', image: '/public/Images/Services/water-purifier.jpg' },
  { title: 'Grocery', color: 'bg-orange-500', image: '/public/Images/Services/grocery.jpg' },
  { title: 'TV Repair Service', color: 'bg-green-900', image: '/public/Images/Services/tv-repair.jpg' },
  { title: 'Salons', color: 'bg-rose-800', image: '/public/Images/Services/salons.jpg' },
  { title: 'Bridal Requisite', color: 'bg-lime-700', image: '/public/Images/Services/jewelry.jpg' },
  { title: 'E-commerce Solutions', color: 'bg-blue-700', image: 'path/to/ecommerce-image' },
  { title: 'Spa & Massage', color: 'bg-indigo-600', image: '/public/Images/Services/spa&messages.jpg' },
  { title: 'AC Repair', color: 'bg-indigo-600', image: '/public/Images/Services/ac-service.jpg' },
  { title: 'Electricians', color: 'bg-indigo-600', image: 'path/to/app-image' },
  { title: 'App Development', color: 'bg-indigo-600', image: 'path/to/app-image' },
  { title: 'App Development', color: 'bg-indigo-600', image: 'path/to/app-image' },
];

const PopularServices = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto mb-5 relative container">
      <h2 className="font-bold text-2xl mb-8">Popular services</h2>
      <div className="relative flex items-center">
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ◀
        </button>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden w-full"
          style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} text-white w-60 rounded-xl flex flex-col justify-between p-5 min-h-[220px] shadow-lg flex-shrink-0`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <div className="bg-white rounded-lg flex items-center justify-center h-32">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
