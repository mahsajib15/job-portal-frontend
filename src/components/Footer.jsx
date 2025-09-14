function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Proyo<span className="text-red-600">jon</span></h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="mb-2">Noakhali, Chittagong, Bangladesh</p>
            <p className="mb-2">Phone: +880 12312345</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@example.com"
                className="hover:underline text-[#dc2626]"
              >
                proyojon@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
              target="_blank"
                href=""
                className="text-white hover:text-[#dc2626]"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
              target="_blank"
                href=""
                className="text-white hover:text-[#dc2626]"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
              target="_blank"
                href=""
                className="text-white hover:text-[#dc2626]"
                aria-label="LinkedIn"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a
              target="_blank"
                href=""
                className="text-white hover:text-[#dc2626]"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
