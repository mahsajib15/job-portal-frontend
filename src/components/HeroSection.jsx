import { useEffect, useRef, useState } from "react";
import { MapPinIcon, SearchIcon } from "lucide-react";
import SubHeroSection from "./ui/SubHeroSection";

function HeroSection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % slider.children.length;
      setCurrentIndex(newIndex);
      slider.style.transform = `translateX(-${newIndex * 100}%)`;
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const slider = sliderRef.current;
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

  return (
    <>
    <div>

    <div className="relative flex flex-col justify-center items-center mt-36">
      <div className="w-full max-w-4xl relative">
        {/* Search Box Overlay */}
        <div
          className={`fixed inset-x-0 z-20 flex justify-center transition-transform duration-300 ease-in-out top-20`}
        >
          <div className="relative sm:w-auto flex border border-black rounded-md overflow-hidden bg-white bg-opacity-90 shadow-lg">
            <input
              type="text"
              placeholder="Search a Service"
              className="outline-none border-none w-64 px-4 py-2 bg-transparent"
            />
            <div className="flex items-center border-l px-3">
              <span className="text-gray-500">
                <MapPinIcon className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="District, Upozilla"
                className="outline-none border-none bg-transparent px-2"
              />
              <button className="bg-gray-300 p-2 rounded-md">
                <SearchIcon className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Background Image Slider */}
        <div className="flex justify-center overflow-hidden w-full relative">
          <div className="w-full relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg">
            <div
              className="flex w-full h-full"
              ref={sliderRef}
              style={{ transition: "transform 0.5s ease" }}
            >
              {[
                "https://img.freepik.com/free-photo/male-technician-working-broken-computer_23-2147922177.jpg",
                "https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721551.jpg",
                "https://img.freepik.com/free-photo/installing-tv_1098-17902.jpg",
                "https://img.freepik.com/free-photo/young-handsome-man-driving-his-new-car-holding-out-keys_231208-889.jpg?t=st=1735674141~exp=1735677741~hmac=1734b049301db91535722bc1a864f872599554c3a9d6b07cb91adaf1014785a1&w=996",
                "https://img.freepik.com/free-photo/young-woman-combing-hair-sitting-table-with-makeup-tools-living-room_141793-120826.jpg?t=st=1735674587~exp=1735678187~hmac=060f5178781c552b4e124c6b300a544e45ef8da322cbd94b82d2609798c95a8c&w=1380"
              ].map((src, index) => (
                <div
                  key={index}
                  className="w-full bg-cover bg-center flex-shrink-0 h-full"
                  style={{ backgroundImage: `url('${src}')` }}
                ></div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div>
      <SubHeroSection />
    </div>

    </>
  );
}

export default HeroSection;
