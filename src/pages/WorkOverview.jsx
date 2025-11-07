import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

const WorkOverview = () => {
  return (
    <section className="min-h-screen bg-[#f9f6f1] text-[#3c2f2f] px-6 md:px-12 py-20">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-serif mb-4">My Work</h1>
        <p className="text-[#5b4b4b] text-base md:text-lg">
          A collection of projects where design thinking meets front-end
          development — minimal, interactive, and crafted with purpose.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to={`/work/${project.id}`} className="block">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-[#5b4b4b]">{project.subtitle}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center pt-16">
        <Link
          to="/"
          className="inline-block border border-[#3c2f2f] px-6 py-3 rounded-full hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default WorkOverview;
