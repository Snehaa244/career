import React from "react";

function Footer1() {
  return (
    <footer className="bg-[#1c1b1f] py-6">
      <div className="flex flex-col items-center gap-4">

        {/* Social Media Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">

          <a href="#" className="flex items-center gap-2 text-white hover:text-[#26efca] transition">
            <img src="https://cdn-icons-png.freepik.com/256/10090/10090288.png" className="w-6 h-6" />
            Github
          </a>

          <a href="#" className="flex items-center gap-2 text-white hover:text-[#26efca] transition">
            <img src="https://cdn-icons-png.freepik.com/256/2504/2504923.png" className="w-6 h-6" />
            LinkedIn
          </a>

          <a href="#" className="flex items-center gap-2 text-white hover:text-[#26efca] transition">
            <img src="https://cdn-icons-png.freepik.com/256/2504/2504918.png" className="w-6 h-6" />
            Instagram
          </a>

          <a href="#" className="flex items-center gap-2 text-white hover:text-[#26efca] transition">
            <img src="https://cdn-icons-png.freepik.com/256/2504/2504934.png" className="w-6 h-6" />
            Reddit
          </a>

          <a href="#" className="flex items-center gap-2 text-white hover:text-[#26efca] transition">
            <img src="https://cdn-icons-png.freepik.com/256/889/889226.png" className="w-6 h-6" />
            Twitch
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center">
          © 2024 CareerConnect — Sneha Parmar
        </p>

      </div>
    </footer>
  );
}

export default Footer1;