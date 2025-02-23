import React from "react";
import { BookOpen, Utensils, Trophy, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurMotive() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-green-50 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Motive Section */}
        <motion.h2
          className="text-4xl font-bold text-green-700 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Mission & Vision
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          At One Touch Foundation, we believe every child deserves the
          opportunity to learn, grow, and dream. Our mission is to provide
          education, nutrition, sports opportunities, and holistic support to
          shape bright futures.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 place-items-center text-center">
          {[
            {
              icon: <BookOpen size={40} />,
              title: "Education",
              desc: "Empowering children with knowledge and skills for a brighter tomorrow.",
            },
            {
              icon: <Utensils size={40} />,
              title: "Nutrition",
              desc: "Ensuring children have access to nutritious meals for healthy development.",
            },
            {
              icon: <Trophy size={40} />,
              title: "Sports",
              desc: "Encouraging children to dream big and excel through sports and recreation.",
            },
            {
              icon: <HeartHandshake size={40} />,
              title: "Support",
              desc: "Providing holistic care and guidance to help children achieve their dreams.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl text-center p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <div className="text-green-500 flex justify-center items-center w-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Join the Movement */}
        <motion.div
          className="mt-12 bg-green-700 text-white py-8 px-6 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
          <p className="max-w-2xl mx-auto mb-4">
            Be a part of our journey to create a more inclusive and
            compassionate education system. Donate, volunteer, or spread the
            word to help us make a difference!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
