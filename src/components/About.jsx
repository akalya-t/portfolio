import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-[#f4f1ea] text-center">
      <motion.h2
        className="text-3xl font-serif mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-[#5b4b4b] space-y-6">
        <p>
          I’m <span className="font-medium text-[#3c2f2f]">Akalya</span> — a
          front-end developer with a background in design. I build responsive,
          accessible interfaces that blend clean code with thoughtful visual
          design.
        </p>

        <p>
          I work with{" "}
          <span className="font-medium text-[#3c2f2f]">
            React, Tailwind CSS, and Framer Motion
          </span>{" "}
          to bring structure, motion, and interactivity into digital
          experiences.
        </p>

        <div className="pt-4">
          <Link
            to="/about"
            className="inline-block border border-[#3c2f2f] px-6 py-3 rounded-full hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all duration-300"
          >
            Know More About Me →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
