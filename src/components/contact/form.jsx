import React, { useState } from "react"

const Input = ({ data }) => {
  return (
    <div>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {data.label}
      </span>
      <input
        className="mt-[2px] w-full  rounded border border-sky-600/50 bg-transparent  py-[6px] px-3  outline-none  placeholder:text-slate-500 focus:border-sky-600 dark:border-sky-300/50 placeholder:dark:text-sky-300/30 focus:dark:border-sky-300"
        type="text"
        placeholder={data.placeholder}
      />
    </div>
  )
}

const TextArea = ({ data }) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <span className={`flex items-end justify-between text-sm font-medium`}>
        {data.label}{" "}
        <span
          className={`text-xs ${
            count >= data.maxLength
              ? "text-red-600 dark:text-red-400"
              : "text-slate-700 dark:text-slate-200"
          }`}
        >{`${count}⁄${data.maxLength}`}</span>
      </span>
      <textarea
        onChange={e => setCount(e.target.value.length)}
        className="mt-[2px] w-full  resize-none rounded border border-sky-600/50  bg-transparent py-[6px]  px-3  outline-none placeholder:text-slate-500 focus:border-sky-600 dark:border-sky-300/50 placeholder:dark:text-sky-300/30 focus:dark:border-sky-300"
        type="text"
        placeholder={data.placeholder}
        maxLength={data.maxLength}
        rows={data.row}
      />
    </div>
  )
}

const SubmitBtn = ({ label, icon, action }) => {
  return (
    <button
      onClick={action}
      className="box-border rounded bg-gradient-to-r from-sky-400 to-sky-300 px-4 py-1.5 text-slate-700 transition-all duration-75 ease-in  dark:text-slate-700"
    >
      <div>{label}</div>
    </button>
  )
}

const ContactForm = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <Input data={data.name} />
        <Input data={data.email} />
      </div>
      <div>
        <Input data={data.subject} />
      </div>
      <div>
        <TextArea data={data.message} />
      </div>
      <div>
        <SubmitBtn {...data.button} action={() => ""} />
      </div>
    </div>
  )
}

const Form = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-x-4 gap-y-8 py-16 px-4 sm:px-8 md:flex-row md:gap-x-8 lg:px-16">
      <div className="flex basis-1/2 items-end justify-center md:justify-start lg:basis-2/5">
        <img
          className="w-full  md:w-full lg:w-auto"
          src={data.img}
          alt={data.imgAlt}
        />
      </div>
      <div className="basis-1/2 lg:basis-3/5">
        <div className="mb-4">
          <h2 class="font-[Kurale] text-3xl  font-bold lg:text-4xl">
            {data.h1}
          </h2>
          <div class="mt-4 text-sky-700 dark:text-sky-300">
            {data.h2.text1}{" "}
            <a href={data.h2.href} class="font-medium underline">
              {data.h2.text2}
            </a>{" "}
            {data.h2.text3}
          </div>
        </div>
        <ContactForm data={data} />
      </div>
    </div>
  )
}

export default Form
