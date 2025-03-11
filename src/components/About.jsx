import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import founder1 from "/assets/gallery/founder1.jpg";
import founder2 from "/assets/gallery/founder2.jpg";
import founder3 from "/assets/gallery/founder3_1.jpg";
import founder4 from "/assets/gallery/founder4.jpg";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-700"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Meet Our Founders
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-600 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          At One Touch, our journey began with the vision of spreading kindness
          and compassion to every corner of the world. Our founders, with their
          diverse experiences and shared passion for social change, lead us
          toward making a meaningful impact.
        </motion.p>

        {/* Founders Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {[
            {
              img: founder1,
              name: "Vipul Gupta",
              role: "Founder | President",
              desc: "Vipul Gupta, the visionary leader of One Touch, inspires our team with his passion for fostering educational growth and uplifting communities through various developmental programs.",
            },
            {
              img: founder2,
              name: "Abhishek Goel",
              role: "Secretary",
              desc: "Abhishek Goel manages organizational strategies and drives collaboration, ensuring our mission to support environmental conservation and social welfare remains at the forefront.",
            },
            {
              img: founder3,
              name: "Arun Singh",
              role: "Treasurer",
              desc: "Arun Singh manages financial operations, bringing transparency and accountability to the organization's social programs while driving impactful funding strategies.",
            },
            {
              img: founder4,
              name: "Shagun Jain",
              role: "Auditor",
              desc: "Shagun Jain ensures financial transparency and accountability by overseeing audits and compliance, helping the NGO maintain integrity and trust in its operations.",
            },
          ].map((founder, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden text-center p-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.3,
              }}
            >
              <img
                src={founder.img}
                alt={founder.name}
                className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg md:text-2xl font-bold mb-2">
                {founder.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                {founder.role}
              </p>
              <p className="text-xs md:text-base">{founder.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
