import React from "react"
import { FaCalendarCheck, FaLaptopCode, FaPuzzlePiece } from "react-icons/fa"
import { MdSportsCricket } from "react-icons/md"
import { BiMoviePlay } from "react-icons/bi"
import { MdToys } from "react-icons/md"
import { socilaIconStyle } from "./education"

const data = {
  title: "Hobbies and Interest",
  icon: <FaCalendarCheck size={16} className={socilaIconStyle} />,
  items: [
    {
      id: 1,
      icon: <MdSportsCricket size={25} className={socilaIconStyle} />,
      hobby: "Cricket",
    },
    {
      id: 2,
      icon: <FaLaptopCode size={25} className={socilaIconStyle} />,
      hobby: "Coding and Problem Solving",
    },
    {
      id: 3,
      icon: <MdToys size={25} className={socilaIconStyle} />,
      hobby: "Building Toy Projects",
    },
    {
      id: 4,
      icon: <BiMoviePlay size={25} className={socilaIconStyle} />,
      hobby: "Watching Movies",
    },
    {
      id: 5,
      icon: <FaPuzzlePiece size={25} className={socilaIconStyle} />,
      hobby: "Puzzles solving",
    },
  ],
}

export default data
