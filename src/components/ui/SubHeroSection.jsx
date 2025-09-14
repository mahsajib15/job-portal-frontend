import { Home, Hotel, Scissors, Sofa, GraduationCap, Mic, Building2, Dog, Bed, User, Tooth, Dumbbell, PiggyBank, CalendarDays, Car, Truck, Package, Menu } from "lucide-react";

const services = [
  { name: "Restaurants", icon: Home },
  { name: "Hotels", icon: Hotel },
  { name: "Beauty Spa", icon: Scissors },
  { name: "Home Decor", icon: Sofa },
  { name: "Wedding Planning", icon: CalendarDays },
  { name: "Education", icon: GraduationCap },
  { name: "Rent & Hire", icon: Mic },
  { name: "Hospitals", icon: Building2 },
  { name: "Contractors", icon: User },
  { name: "Pet Shops", icon: Dog },
  { name: "PG/Hostels", icon: Bed },
  { name: "Estate Agent", icon: User },
  { name: "Dentists", icon: Tooth },
  { name: "Gym", icon: Dumbbell },
  { name: "Loans", icon: PiggyBank },
  { name: "Event Organisers", icon: CalendarDays },
  { name: "Driving Schools", icon: Car },
  { name: "Packers & Movers", icon: Truck },
  { name: "Courier Service", icon: Package },
  { name: "Popular Categories", icon: Menu },
];

const SubHeroSection = () => {
  return (
    <div className="grid grid-cols-5 gap-6 max-w-5xl mx-auto mt-10">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition">
          <service.icon size={40} className="text-blue-500 mb-2" />
          <p className="text-sm font-semibold text-center">{service.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SubHeroSection;
