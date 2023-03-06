import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layouts/layout"
import pic from "../images/404/page-not-found.svg"
import SecondaryBtn from "../components/buttons/secondary-btn"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

const PageNotFound = () => (
  <Layout>
    <div className="flex flex-col gap-8 py-8 px-4 sm:px-8 md:flex-row-reverse md:items-center md:justify-center">
      <img
        src={pic}
        alt="page not found png"
        className="sm:p-16 md:w-1/2 md:p-0 lg:w-auto	"
      />
      <div className="flex flex-col items-center gap-4 md:w-1/2 md:items-start lg:w-auto">
        <h1 className="text-3xl font-bold text-sky-800 dark:text-sky-300">
          Opps!
        </h1>
        <h3 className="text-center text-slate-700 dark:text-slate-200 md:text-start">
          The page you are looking for could not be found
        </h3>
        <SecondaryBtn
          to="/"
          label="Return to Home"
          icon={<ArrowLongRightIcon />}
        />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page Not Found" />

export default PageNotFound
