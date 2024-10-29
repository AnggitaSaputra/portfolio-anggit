import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jennyhImg from "@/public/jennyh.png";
import kpiImg from "@/public/kpi.png";
import managepertImg from "@/public/managepert.png";
import harvestabadiImg from "@/public/harvestabadi.png";
import dishubsituImg from "@/public/dishubsitu.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lulusan MSIB Batch 4 Front-End Developer",
    location: "Maxy Academy",
    description:
      "Saya lulus setelah berpartipisasi dalam studi independent 1 bulan di Maxy Academy dan langsung mendapatkan case pekerjaan sebagai front-end developer di PT Seru selama 3 bulan.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Publisher dan Presented",
    location: "Centive, Institut Teknologi Telkom Purwokerto",
    description:
      "Saya mempublikasikan jurnal dan mempresentasikannya di Centive, Institut Teknologi Telkom Purwokerto. Judul jurnal tersebut adalah Perancangan Sistem Layanan Pengaduan Masyarakat Berbasis Web Menggunakan Metode Extreme Programming.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Sertifikasi Junior Web Developer",
    location: "BNSP",
    description:
      "Saya berhasil mendapatkan Sertifikasi Junior Web Developer setelah menyelesaikan pelatihan di Institut Teknologi Telkom Purwokerto.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Jenny House",
    description:
      "Platform blog untuk berbagi tips dan pengalaman makeup serta fashion, dengan antarmuka sederhana dan elegan. ",
    tags: ["React", "Next.js", "mysql", "Tailwind", "laravel"],
    imageUrl: jennyhImg,
  },
  {
    title: "Key Performance Indicator (KPI)",
    description:
      "Yaitu website untuk mengukur kinerja individu, tim, membantu mengevaluasi efektivitas proses atau kegiatan bisnis tertentu.",
    tags: ["React", "Next.js", "mysql", "Tailwind", "laravel"],
    imageUrl: kpiImg,
  },
  {
    title: "Management Pertandingan Karate",
    description:
      "Platform website untuk pendataan pendaftaran tim dan atlet, pengaturan kelas, serta pemrosesan pembayaran real-time.",
    tags: ["mysql", "Tailwind", "laravel"],
    imageUrl: managepertImg,
  },
  {
    title: "Harvest Abadi",
    description:
      "Platform website company profile dengan menampilkan informasi service dan profile perusahaan Harvest Abadi",
    tags: ["React", "mysql", "Tailwind", "laravel"],
    imageUrl: harvestabadiImg,
  },
  {
    title: "Dishub Situbondo",
    description:
      "Platform website company profile dengan menampilkan informasi artikel, jadwal transportasi dan profile company",
    tags: ["React", "mysql", "Tailwind", "laravel"],
    imageUrl: dishubsituImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Laravel",
  "Git",
  "Tailwind",
  "MYSQL",
  "Express",
] as const;
