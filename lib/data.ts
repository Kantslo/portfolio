import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import memoryGameImg from "@/public/memory-game.png"
import parkingAppImg from "@/public/parking-app-api.png"

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Parking App Api",
    description: "Parking App Api let's you to register on parking application and add your vehicle, make parking reservations and connect your vehicles with parking lots",
    tags: ["Node.Js", "Express.Js", "Typescript", "Swagger"],
    imageUrl: parkingAppImg,
  },
  {
    title: "Memory Game",
    description:
      "This is my first game I made with javascript, players can either choose number or icon mode for the game, and 4x4 and 6x6 board, players can start single-player mode, or play up to 4 players.",
    tags: ["React", "Typescript", "Tailwind"],
    imageUrl: memoryGameImg,
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
  "Tailwind",
  "Express",
  "Swagger",
  "RESTful API",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Sequelize",
  "Styled Components",
  "Framer Motion"
] as const;
