import React from "react"

const Fact = ({ data }) => {
  return (
    <div className="px-4 py-16 sm:px-8 lg:px-16">
      <h2 className="pb-4 text-center text-3xl font-medium ">{data.label}</h2>
      <h3 className="text-center text-xl font-medium text-sky-700 dark:text-sky-300">
        {data.description}
      </h3>
      <div className="mt-4 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2  md:mt-8 lg:grid-cols-4">
        {data.facts.map(fact => (
          <div className="flex w-full flex-col items-center gap-2 rounded border py-8 px-4 shadow-sky-800 hover:border-sky-300 hover:shadow-md dark:shadow-sky-300">
            {fact.icon}
            <div className="mt-2 font-mono text-2xl text-sky-700 dark:text-sky-300">
              {fact.value}
            </div>
            <div>{fact.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fact
