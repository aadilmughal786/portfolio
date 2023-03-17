import img from "../../../images/blog/blog1/card.png"
import authorData from "../author"

export const metaData = {
  img: img,
  title: "How to check Prime number",
  date: "12 jul 2022",
  author: authorData,
  chip: "Featured",
  route: "/blog/prime-number",
  description: `A positive integer which is only divisible by 1 and itself is known as prime number.`,
  tags: ["C++", "Python"],
}

const content = [
  {
    label: "p",
    data: `A positive integer which is only divisible by 1 and itself is known as prime number.`,
  },
  {
    label: "p",
    data: `For example: 13 is a prime number because it is only divisible by 1 and 13 but, 15 is not prime number because it is divisible by 1, 3, 5 and 15.`,
  },
  {
    label: "h2",
    data: `Example: Check Prime Number`,
  },
  {
    label: "img",
    data: {
      img: img,
      alt: "alt",
    },
  },
  {
    label: "note",
    data: {
      text1: "Note :",
      text2: "0 and 1 are not prime numbers.",
    },
  },
  {
    label: "code",
    data: `for (i = 2; i <= n/2; ++i) {
  if (n % i == 0) {
    is_prime = false;
    break;
  }
}`,
  },
]

const data = {
  metaData,
  content,
}

export default data
