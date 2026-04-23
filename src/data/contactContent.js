import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const contactContent = {
  ES: {
    label: "03 / Contacto",
    title: "Hablemos",
    subtitle: "¿Tienes un proyecto en mente o quieres hablar? Escríbeme — respondo en menos de 24h.",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te respondo pronto.",
      error: "Algo salió mal. Intenta de nuevo.",
    },
  },
  EN: {
    label: "03 / Contact",
    title: "Let's talk",
    subtitle: "Have a project in mind or just want to chat? Write me — I reply within 24h.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
    },
  },
};

export const contactLinks = [
  {
    icon: FaEnvelope,
    label: "jhonfredyha@gmail.com",
    url: "mailto:jhonfredyha@gmail.com",
  },
  {
    icon: FaGithub,
    label: "JhonFredyH",
    url: "https://github.com/JhonFredyH",
  },
  {
    icon: FaLinkedin,
    label: "jhonf-hidalgo",
    url: "https://www.linkedin.com/in/jhonf-hidalgo-566274334/",
  },
];
