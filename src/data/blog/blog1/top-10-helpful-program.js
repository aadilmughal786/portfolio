import img from "../../../images/blog/blog1/card.svg"
import authorData from "../author"

export const metaData = {
  img: img,
  title: "Top 10  helpful program",
  date: "12 jul 2022",
  author: authorData,
  chip: "New",
  route: "/blog/top-10-helpful-program",
  description: `Here are 10 most helpful program code snippets that I use during coding contest which can be used as subroutine`,
  tags: ["C++", "Python"],
}

// Labels => p, h2, img, code, note
const content = [
  {
    label: "p",
    data: `Here are 10 most helpful program code snippets that I use during coding contest which can be used as subroutine`,
  },

  {
    label: "h2",
    data: `1. Quickly check odd or even`,
  },
  {
    label: "code",
    code: `bool isOdd(int n){
	return n&1;
}`,
    lang: "cpp",
  },

  {
    label: "h2",
    data: `2. Count digits in an integer`,
  },
  {
    label: "code",
    code: `int countDigit(int n) { 
  return floor(log10(n) + 1); 
}`,
    lang: "cpp",
  },
]

const data = {
  metaData,
  content,
}

export default data
