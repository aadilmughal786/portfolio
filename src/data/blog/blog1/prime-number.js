import img from "../../../images/blog/blog1/card.png"
import authorData from "../author"

export const metaData = {
  img: img,
  title: "How to check Prime number",
  date: "12 jul 2022",
  author: authorData,
  chip: "Featured",
  route: "/blog/prime-number",
  description:
    "lorem impluse lorem impluselorem impluselorem impluselorem impluselorem impluselorem impluselorem impluse",
  tags: ["C++", "Python"],
}

const content = [
  {
    label: "p",
    data: "lorem impluse lorem impluselorem impluselorem impluselorem impluselorem impluselorem impluselorem impluse",
  },
  {
    label: "h2",
    data: "sdfpsjdfosjd",
  },
  {
    label: "img",
    data: {
      img: img,
      alt: "alt",
    },
  },
]

const data = {
  metaData,
  content,
}

export default data
