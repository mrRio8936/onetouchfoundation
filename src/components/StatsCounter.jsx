import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { number: 1232, label: "Students" },
  { number: 64, label: "Courses" },
  { number: 42, label: "Events" },
  { number: 24, label: "Trainers" },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section className="py-16 bg-green-700">
      <div
        ref={ref}
        className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <h2 className="text-5xl font-bold text-green-500">
              {inView ? (
                <CountUp start={0} end={stat.number} duration={2} />
              ) : (
                0
              )}
            </h2>
            <p className="text-gray-600 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
