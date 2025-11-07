import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-[#f9f6f1] text-[#3c2f2f] px-6 md:px-12 py-20">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-serif mb-3">More About Me</h1>
        <p className="text-[#5b4b4b] text-base md:text-lg">
          Behind every interface, there’s a mind that loves both structure and storytelling.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-10 leading-relaxed text-[#4b3e3e]">
        <p>
          I’m <span className="font-medium text-[#3c2f2f]">Akalya</span> — a
          front-end developer who began her journey through the lens of design.
          My background in branding and visual communication shaped how I think
          about clarity, rhythm, and emotion in digital interfaces.
        </p>

        <p>
          My current focus is on building modern web experiences using{" "}
          <span className="font-medium text-[#3c2f2f]">
            React, Tailwind CSS, and Framer Motion
          </span>
          . I enjoy creating UI systems that feel lightweight yet expressive,
          where every motion and pixel serves a purpose.
        </p>

        <p>
          I hold a{" "}
          <span className="font-medium text-[#3c2f2f]">
            B.Sc. in Mathematics and Education
          </span>
          , which built my analytical foundation and curiosity for structured
          problem-solving. Over time, I transitioned from logo and brand design
          to front-end development — a space that lets me blend logic with
          aesthetics.
        </p>

        <p>
          Beyond technical work, I value process — from research and concept
          sketches to deployment and optimization. I’m passionate about creating
          interfaces that communicate clearly and feel human to interact with.
        </p>

        <p>
          I’m currently open to{" "}
          <span className="font-medium text-[#3c2f2f]">
            front-end developer or creative technologist roles
          </span>{" "}
          where I can bring design thinking, precision, and code together to
          build memorable digital products.
        </p>

        {/* Tech Stack Section */}
        <div className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Tech Stack & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Tailwind CSS",
              "Framer Motion",
              "JavaScript",
              "Vite",
              "Git",
              "Figma",
              "Photoshop",
            ].map((tool, index) => (
              <span
                key={index}
                className="border border-[#3c2f2f] rounded-full px-4 py-1 text-sm hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center pt-12">
          <Link
            to="/"
            className="inline-block border border-[#3c2f2f] px-6 py-3 rounded-full hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
