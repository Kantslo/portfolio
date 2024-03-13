"use client"

import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project"

export default function Projects() {
  const {ref, inView} = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 0) {
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return <section ref={ref} id="projects" className="scroll-mt-28">
    <SectionHeading>My projects</SectionHeading>
    <div>
      {
        projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))
      }
    </div>
  </section>
}