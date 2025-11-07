// src/pages/WorkDetail.jsx
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const WorkDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p>Project not found 🐾</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f9f6f1] text-[#3c2f2f] px-6 md:px-12 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-serif mb-2">{project.title}</h1>
        <p className="text-[#5b4b4b] mb-6">{project.subtitle}</p>

        {project.liveLink && (
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 border border-[#3c2f2f] px-6 py-3 rounded-full hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Live Project ↗
          </motion.a>
        )}

        <img
          src={project.heroImage}
          alt={project.title}
          className="rounded-2xl shadow-md w-full object-cover mb-10"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto space-y-10 text-left leading-relaxed text-[#4b3e3e]">
        <div>
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p>{project.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Process</h3>
          <p>{project.process}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Impact</h3>
          <p>{project.impact}</p>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <LazyLoadImage
                    src={img}
                    alt={`${project.title} image ${index + 1}`}
                    effect="blur"
                    className="rounded-xl object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-10 text-center">
          <Link
            to="/work"
            className="inline-block border border-[#3c2f2f] px-6 py-3 rounded-full hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all"
          >
            ← Back to Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkDetail;
