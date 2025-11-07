const Footer = () => {
  return (
    <footer className="bg-[#f4f1ea] text-[#3c2f2f] py-10 px-6 border-t border-[#d6cfc7]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section — Brand */}
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl mb-1">Akalya</h3>
          <p className="text-sm text-[#5b4b4b]">
            Crafting clarity through code & design.
          </p>
        </div>

        {/* Center Section — Social Links */}
        <div className="flex gap-6 text-sm text-[#5b4b4b]">
          <a
            href="https://www.linkedin.com/in/akalya-thirumurugan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3c2f2f] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.x.com/Akalya_T03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3c2f2f] transition-colors"
          >
            X
          </a>
          <a
            href="https://linktr.ee/akalyacodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3c2f2f] transition-colors"
          >
            Linktree
          </a>
          <a
            href="https://github.com/akalya-t"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3c2f2f] transition-colors"
          >
            Github
          </a>
          <a
            href="mailto:akalyaofficial271@gmail.com"
            className="hover:text-[#3c2f2f] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right Section — Copyright */}
        <div className="text-center md:text-right text-sm text-[#5b4b4b]">
          © {new Date().getFullYear()} Akalyathirumurugan
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-[#8a7f78]">
        Built with ❤️ using React & TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;
