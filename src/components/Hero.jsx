import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-[#f9f6f1] text-[#3c2f2f]">
      <motion.h1
        className="text-4xl md:text-6xl font-serif mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Akalya.
      </motion.h1>

      <motion.p
        className="max-w-md text-sm md:text-base leading-relaxed text-[#5b4b4b]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Front-end developer crafting interactive, minimal digital spaces powered
        by clean, accessible code.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/work"
          className="mt-8 inline-block px-6 py-3 border border-[#3c2f2f] rounded-full hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all duration-300"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
