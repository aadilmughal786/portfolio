import formImg from "../../images/contact/form.svg"

const data = {
  img: formImg,
  imgAlt: "aadil form image",
  h1: "Lets talk about everything!",
  h2: {
    text1: "Hate forms? Send me an",
    text2: "email",
    href: "mailto:aadilshe786@gmail.com",
    text3: "instead.",
  },

  name: {
    label: "Name",
    placeholder: "Enter name",
  },
  email: {
    label: "Email",
    placeholder: "Enter email",
  },
  subject: {
    label: "Subject",
    placeholder: "Enter subject",
  },
  message: {
    label: "Message",
    placeholder: "Enter message",
    maxLength: 200,
    row: 4,
  },

  button: {
    label: "",
    icon: "",
  },
}

export default data
