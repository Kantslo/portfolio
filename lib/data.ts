import React from "react";

import { FaSmile, FaCode } from "react-icons/fa";

import memoryGameImg from "@/public/memory-game.png"
import parkingAppImg from "@/public/parking-app-api.png"
import restCountriesImg from "@/public/rest-countries-api.png"
import dictionaryAppImg from "@/public/dictionary-web-app.png"

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
    title: "No job experience :/",
    location: "",
    description:
      "You are going to have to help me with that!",
    icon: React.createElement(FaSmile),
    date: "present",
  },
  {
    title: "This could have been you",
    location: "",
    description:
      "I could be working in your company right now, and this amazing timeline animation could be filled with more experiences.",
    icon: React.createElement(FaCode),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Parking App Api",
    description: "Seamlessly integrate our API into your application to access real-time parking availability, pricing information, and reservation capabilities. Whether you're a driver searching for the nearest parking spot or a business looking to optimize parking management, our API offers comprehensive features to meet your needs.",
    tags: ["Node.Js", "Express.Js", "Typescript", "Swagger"],
    imageUrl: parkingAppImg,
  },
  {
    title: "Memory Game",
    description:
      "Enjoy my first javascript game I built for you! Choose between numbers and icons, and select from 4x4 or 6x6 board sizes for varying challenges. Exercise your brain, test your memory, and enjoy hours of entertainment!",
    tags: ["React", "Typescript", "Tailwind"],
    imageUrl: memoryGameImg,
  },
  {
    title: "REST Countries API",
    description:
      "Welcome to our REST Countries API service, your gateway to a world of global information at your fingertips. With seamless integration and robust functionality, our API provides comprehensive data on countries worldwide. Explore detailed information including country names, population, languages spoken, currencies used, and much more.",
    tags: ["React", "Tailwind", "Axios"],
    imageUrl: restCountriesImg,
  },
  {
    title: "Dictionary Web App",
    description:
      "Enhance your vocabulary with this dictionary app I built from frontend-mentor, access definitions, synonyms, and examples, empowering you to expand your linguistic horizons effortlessly.",
    tags: ["React", "Tailwind", "Axios"],
    imageUrl: dictionaryAppImg,
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
