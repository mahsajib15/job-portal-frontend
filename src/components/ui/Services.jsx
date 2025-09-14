import { UserIcon } from "lucide-react";
import frontend from "../../images/Front-End-Developer.png";
import laptop from "../../images/laptopRepair.jpg";
import desktop from "../../images/desktop.jpg";
import macBook from "../../images/macBook.jpg";
import printerRepair from "../../images/printerRepair.jpg";

const Services = () => {
  return (
    <>

      <div className="bg-gray-200 py-16 px-8 flex justify-center container">
        <div className="max-w-7xl w-full">
          {/* Section Title */}
          <h2 className="text-center font-bold text-3xl mb-6">Services</h2>
          <div className="flex justify-center mb-10">
            <div className="w-20 h-1 bg-red-500"></div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={laptop} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">
                  Laptop Repair Service
                </h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={desktop} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">
                  Desktop Repair Service
                </h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={macBook} className="h-48 w-full" alt="" />
              </div>

              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">MacBook Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={printerRepair} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">
                  Printer Repair Service
                </h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">Corporate Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">Refrigerator Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">TV Repair Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">AC Repair Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">⁠Oven Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">
                  Washing Machine Service
                </h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 11 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">
                  Geyser Repair Services
                </h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 12 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">IPS Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 13 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">
                  Water Purifier Service
                </h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 14 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">CCTV Camera Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 15 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">
                  Plumbing & Sanitary Service.
                </h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 16 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">Electrical Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 17 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">Refrigerator Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>

            {/* Card 18 */}
            <div className="border border-red-500 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 flex items-center justify-center">
                <img src={frontend} className="h-48 w-full" alt="" />
              </div>
              <div className="p-6 text-black">
                <div className="flex gap-2 mt-4">
                  <div className="p-1 bg-white rounded-md text-center">
                    React
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    JavaScript
                  </div>
                  <div className="p-1 bg-white rounded-md text-center">
                    Tailwind
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-6">Refrigerator Service</h3>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm">NextTech Limited</p>
                      <p className="text-sm">Uttara, Dhaka</p>
                    </div>
                  </div>
                  <div className="text-sm">12/12/24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
