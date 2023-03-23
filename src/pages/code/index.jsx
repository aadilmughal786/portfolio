import React from "react"
import Layout from "../../components/layouts/layout"
import Seo from "../../components/seo/seo"
import data from "../../data/code/index"
import { Link } from "gatsby"
import { TbExternalLink } from "react-icons/tb"

const Index = () => {
  return (
    <Layout>
      <h2 className="py-16 text-center font-[Kurale] text-2xl md:text-4xl">
        {data.title}
      </h2>
      <div className="flex flex-col items-center gap-4 px-4 pb-32 sm:px-8 md:flex lg:px-16">
        {data.items.map((item, index) => (
          <Link
            to={item.metaData.to}
            className="flex w-full flex-row items-center	 justify-between rounded border p-4 font-medium tracking-wider text-sky-700 shadow-sky-800 transition-all duration-200 ease-in hover:border-sky-300 hover:shadow-md dark:text-sky-300 dark:shadow-sky-300 md:w-3/5"
          >
            {`${index + 1}. ${item.metaData.title}`}
            <TbExternalLink size={20} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Code" />

export default Index
