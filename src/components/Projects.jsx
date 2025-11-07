import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import lg1 from "../assets/lg-1.png";
import portfolioImg from "../assets/pf-1.png";
import bearImg from "../assets/bs-1.png";
import moodImg from "../assets/mc-1.png";

const projects = [
  {
    title: "Logo Design Gallery",
    subtitle: "A curated collection of my branding & logo works",
    img: lg1,
    link: "/work/logo-designs",
  },
  {
    title: "Portfolio Site",
    subtitle: "My personal portfolio built with React + Tailwind",
    img: portfolioImg,
    link: "/work/portfolio",
  },
  {
    title: "The Bear Site",
    subtitle: "A minimal documentation-style branding (bear) website",
    img: bearImg,
    link: "/work/bearsite",
  },
  {
    title: "Eunoia",
    subtitle: "A web app that changes theme based on emotion",
    img: moodImg,
    link: "/work/eunoia",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-[#f9f6f1] text-center overflow-hidden relative"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-serif mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Featured Projects
      </motion.h2>

      {/* Swiper Carousel */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        navigation={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 3,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="max-w-5xl pb-24" 
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="w-[260px] md:w-[340px] lg:w-[400px] cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={project.link}
                className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#5b4b4b]">{project.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
