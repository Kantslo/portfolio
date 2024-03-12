import React from "react";

import { LuGraduationCap } from "react-icons/lu";

import memoryGameImg from "@/public/memory-game.png"

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
    title: "",
    location: "",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
] as const;

export const projectsData = [
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
  "MongoDB",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Sequelize",
  "Styled Components",
  "RESTful API",
  "Swagger",
] as const;