const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-white/10 mb-5" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pb-5">

          {/* Left Side */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {currentYear}{" "}
            <span className="font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Dasari Tirumala Ganesh
            </span>
            . All Rights Reserved.
          </p>

          {/* Right Side */}
          <p className="text-sm text-gray-500 text-center md:text-right">
            Designed & Developed with{" "}
            <span className="text-red-400">♥</span> 
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;