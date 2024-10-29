"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">Sebagai lulusan terbaru dari jurusan <span className="font-medium">Informatika</span>, saya memiliki semangat tinggi dalam mengeksplorasi dunia teknologi, khususnya di bidang 
      <span className="font-medium">web development</span>. Saya memiliki pemahaman yang kuat tentang 
      <span className="font-medium"> HTML, CSS, dan JavaScript</span>, serta pengalaman dengan beberapa framework populer seperti 
      <span className="font-medium"> Laravel</span> dan <span className="font-medium">React</span>. Selain itu, saya juga terbiasa dengan prinsip-prinsip  
      <span className="font-medium"> responsive design</span> dan berfokus pada pengalaman pengguna yang optimal.
      </p>
    </motion.section>
  );
}
