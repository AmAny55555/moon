import { GridBackgroundDemo } from "./components/Line";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* الجريد جوه الفوتر نفسه */}
      <div className="absolute inset-0 -z-10">
        <GridBackgroundDemo />
      </div>

      <div className="flex flex-col items-center justify-center py-16 px-6 w-full  min-h-[16rem]">
        <p className="font-bold text-white sm:text-lg md:text-3xl text-center z-10 max-w-3xl">
          Ready to take <span className="text-fuchsia-300">your</span> digital
          <br />
          presence to the next level
        </p>

        <p className="text-gray-300 mt-4 text-xs z-10 max-w-3xl text-center">
          Reach out to me today and let's discuss how I can help you achieve
          your goal
        </p>

        <button
          className="mt-10 z-10 px-6 py-3 rounded-md font-semibold text-white
          backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 border border-white/10
          hover:text-white transition-all duration-300"
        >
          Contact Me Now
        </button>

        {/* السطر السفلي */}
        <div className="grid sm:grid-cols-1 sm:items-center md:flex justify-between items-center w-full max-w-screen-xl relative top-10 text-xs px-4 text-white gap-6">
          <p className="whitespace-nowrap ">
            © 2024 Admin Khadeja. All rights reserved.
          </p>
          <div className="flex space-x-3 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-fuchsia-300 transition-colors bg-[#0d1449] p-2"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-fuchsia-300 transition-colors bg-[#0d1449] p-2"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-fuchsia-300 transition-colors bg-[#0d1449] p-2"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
