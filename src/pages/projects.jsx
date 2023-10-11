import React from "react"
import Layout from "../components/layouts/layout"
import Seo from "../components/seo/seo"
import data from "../data/projects/index"
import HeroSection from "../components/projects/hero-section/hero-section"
import Toy from "../components/projects/toy/toy"
import Project from "../components/projects/projects/projects"
import SecondaryBtn from "../components/buttons/secondary-btn"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

const Projects = () => {
  return (
    <div>
      <Layout>
        <HeroSection data={data.heroData} />
        <Project data={data.projectData} />

        <div className="px-4 py-16 sm:px-8 lg:px-16">
          {/* Code snippet library */}
          <div className="flex flex-col items-center justify-between gap-y-6 rounded border border-dashed bg-sky-300/10 p-4 tracking-wider text-sky-700 shadow-sky-800 transition-all duration-200 ease-in hover:shadow-md dark:border-slate-800  dark:bg-slate-700 dark:text-sky-300 dark:shadow-sky-300 sm:flex-row">
            <span className="text-xl font-semibold">
              Code Snippet library in C++
            </span>
            <SecondaryBtn
              label={"View"}
              icon={<ArrowLongRightIcon />}
              to="/code"
            />
          </div>
        </div>

        {/* Toy Projects */}
        <Toy data={data.toyData} />
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Projects" />

export default Projects
