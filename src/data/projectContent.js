import {
  FaGithub,
  FaExternalLinkAlt,
  FaBook,
  FaReact,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { SiPostgresql, SiFastapi } from "react-icons/si";

export const projectsContent = {
  ES: { label: "01 / Proyectos", title: "Diseños que funcionan" },
  EN: { label: "01 / Projects", title: "Designs that work" },
};

export const projects = [
  {
    id: 1,
    visual: "p-visual-1",
    preview: "../../public/portadaHotel.jpg",
    number: "— 01 —",
    live: true,
    name: {
      ES: "LuxeHotel — Sistema de gestión hotelera",
      EN: "LuxeHotel — Hotel Management System",
    },
    desc: {
      ES: "Sistema de gestión hotelera que evita el overbooking garantizando consistencia de datos bajo alta concurrencia.",
      EN: "Hotel management system that prevents overbooking while ensuring data consistency under high concurrency.",
    },
    tags: [
      { icon: FaPython, label: "Python" },
      { icon: SiFastapi, label: "FastAPI" },
      { icon: FaReact, label: "React" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: FaDocker, label: "Docker" },
    ],
    features: [
      {
        ES: "Reservas en tiempo real",
        EN: "Real-time reservations",
        dotColor: "dot-green",
      },
      {
        ES: "Panel administrativo",
        EN: "Admin dashboard",
        dotColor: "dot-green",
      },
      {
        ES: "Concurrencia en PostgreSQL",
        EN: "PostgreSQL concurrency",
        dotColor: "dot-pink",
      },
      {
        ES: "Multi-container Docker",
        EN: "Multi-container Docker",
        dotColor: "dot-pink",
      },
    ],
    links: [
      {
        icon: FaGithub,
        label: { ES: "GitHub", EN: "GitHub" },
        url: "https://github.com/JhonFredyH/LuxeHotel",
      },
      {
        icon: FaExternalLinkAlt,
        label: { ES: "Demo", EN: "Live Demo" },
        url: "https://luxe-hotel-mu.vercel.app",
      },
      {
        icon: FaBook,
        label: { ES: "API", EN: "API" },
        url: "https://luxehotel-api.onrender.com/docs",
      },
    ],
  },

  {
    id: 2,
    visual: "p-visual-2",
    icon: "../../public/hotel.png",
    number: "— 02 —",
    live: false,
    name: {
      ES: "Mant360 — Sistema de gestión de Mantenimiento",
      EN: "Mant360 — Maintenance Management System",
    },
    desc: {
      ES: "Plataforma de mantenimiento con seguimiento de órdenes de trabajo, asignación de técnicos y panel de estado en tiempo real.",
      EN: "Maintenance platform with work order tracking, technician assignment and real-time status dashboard.",
    },
    tags: [
      { icon: SiFastapi, label: "FastAPI" },
      { icon: FaReact, label: "React" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: FaDocker, label: "Docker" },
    ],
    features: [
      {
        ES: "Órdenes de trabajo (CRUD)",
        EN: "Work orders (CRUD)",
        dotColor: "dot-green",
      },
      {
        ES: "Asignación de técnicos",
        EN: "Technician assignment",
        dotColor: "dot-green",
      },
      {
        ES: "Prioridad de tareas",
        EN: "Task priority system",
        dotColor: "dot-pink",
      },
      {
        ES: "Panel de estado en vivo",
        EN: "Live status dashboard",
        dotColor: "dot-blue",
      },
    ],
    links: [
      { icon: FaGithub, label: { ES: "GitHub", EN: "GitHub" }, url: "#" },
      {
        icon: FaExternalLinkAlt,
        label: { ES: "Demo", EN: "Live Demo" },
        url: "#",
      },
      { icon: FaBook, label: { ES: "API", EN: "API" }, url: "#" },
    ],
  },

  {
    id: 3,
    visual: "p-visual-3",
    icon: "../../public/hotel.png",
    number: "— 03 —",
    live: false,
    name: {
      ES: "Gestion360 — Sistema de gestión escolar",
      EN: "Gestion360 — School Management System",
    },
    desc: {
      ES: "Sistema escolar con gestión de estudiantes, registro de calificaciones, control de asistencia y calendario académico.",
      EN: "School system with student management, grade tracking, attendance control and academic calendar.",
    },
    tags: [
      { icon: SiFastapi, label: "FastAPI" },
      { icon: FaReact, label: "React" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: FaDocker, label: "Docker" },
    ],
    features: [
      {
        ES: "Gestión de estudiantes",
        EN: "Student management",
        dotColor: "dot-green",
      },
      {
        ES: "Registro de calificaciones",
        EN: "Grade tracking",
        dotColor: "dot-green",
      },
      {
        ES: "Control de asistencia",
        EN: "Attendance control",
        dotColor: "dot-pink",
      },
      {
        ES: "Calendario académico",
        EN: "Academic calendar",
        dotColor: "dot-blue",
      },
    ],
    links: [
      { icon: FaGithub, label: { ES: "GitHub", EN: "GitHub" }, url: "#" },
      {
        icon: FaExternalLinkAlt,
        label: { ES: "Demo", EN: "Live Demo" },
        url: "#",
      },
      { icon: FaBook, label: { ES: "API", EN: "API" }, url: "#" },
    ],
  },
];
