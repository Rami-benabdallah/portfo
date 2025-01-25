"use client"

import { Landing } from "./components/portfo/Landing";
import { TableOfContents } from "./components/portfo/TableOfContents";
import { AboutMeTech } from "./components/portfo/AboutMeTech";
import { Projects } from "./components/portfo/Projects";
import { Services } from "./components/portfo/Services";
import { Contact } from "./components/portfo/Contact";

export default function Home() {
  return (
    <div>
      <Landing />
      <TableOfContents />
      <AboutMeTech />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}