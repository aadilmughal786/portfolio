import React from "react"
import {
  FaGraduationCap,
  FaSchool,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa"

export const socilaIconStyle =
  "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"

const data = {
  title: "Education",
  icon: <FaUserGraduate size={16} className={socilaIconStyle} />,
  item: [
    {
      id: 1,
      icon: <FaGraduationCap size={40} className={socilaIconStyle} />,
      educationType: "Undergraduate Education",
      instituteName: "University Of Engineering & Management, Jaipur",
      description: "Currently, I am in 4th year. My average score is 8 GPA.",
      status: "Completed",
      year: "2023",
    },
    {
      id: 2,
      icon: <FaSchool size={40} className={socilaIconStyle} />,
      educationType: "Secondary Education",
      instituteName: "Tagore Children Academy, Surajgarh",
      description:
        "I scored 94/100 marks in Mathematics and 96/100 marks in Physics. My over roll score was 83.80 percentage.",
      status: "Completed",
      year: "2017",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher size={40} className={socilaIconStyle} />,
      educationType: "Primary Education",
      instituteName: "Vikas Public Sr. Sec. School, Surajgarh",
      description:
        "I scored 100/100 marks in Mathematics and 98/100 marks in Science. My over roll score was 82.83 percentage.",
      status: "Completed",
      year: "2015",
    },
  ],
}

export default data
