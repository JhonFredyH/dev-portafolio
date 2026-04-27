import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { SiPostgresql, SiFastapi } from "react-icons/si";

export const projectsContent = {
  ES: {
    label: "01 / Proyectos",
    title: "Diseños que funcionan",
  },
  EN: {
    label: "01 / Projects",
    title: "Designs that work",
  },
};

export const projects = [
  {
    id: 1,
    visual: "p-visual-1",
    icon: "🛒",
    number: "— 01 —",
    name: {
      ES: "LuxeHotel — Sistema de gestión hotelera",
      EN: "LuxeHotel — Hotel Management System",
    },
    desc: {
      ES: "Sistema de gestión hotelera con arquitectura full stack. Permite reservas en tiempo real, administración de habitaciones, panel administrativo y sistema de reseñas. Incluye API REST desarrollada en FastAPI y despliegue con Docker.",
      EN: "Full-stack hotel management system featuring real-time reservations, room management, an admin dashboard, and an integrated review system. Built with a FastAPI REST API and deployed using Docker.",
    },
    tags: [
      { icon: FaPython, label: "Python" },
      { icon: SiFastapi, label: "FastAPI" },
      { icon: FaReact, label: "React" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: FaDocker, label: "Docker" },
    ],
    features: [
      { ES: "Gestión de habitaciones (CRUD)", EN: "Room management (CRUD)" },
      { ES: "Panel administrativo", EN: "Admin dashboard" },
      { ES: "API REST con FastAPI", EN: "REST API with FastAPI" },
      { ES: "Despliegue con Docker", EN: "Docker deployment" },
      { ES: "Reservas en tiempo real", EN: "Real-time reservations" },
    ],
    links: [
      { icon: FaGithub, label: { ES: "GitHub", EN: "GitHub" }, url: "https://github.com/JhonFredyH/LuxeHotel" },
      {
        icon: FaExternalLinkAlt,
        label: { ES: "Demo", EN: "Live Demo" },
        url: "https://luxe-hotel-mu.vercel.app",
      },
    ],
  },

  {
    id: 2,
    visual: "p-visual-1",
    icon: "🛒",
    number: "— 02 — ",
    name: {
      ES: "Mant360 — Sistema de gestión de Mantenimiento",
      EN: "Mant360 — Maintenance Management System",
    },
    desc: {
      ES: "Sistema completo de gestión hotelera con panel administrativo, reservas en tiempo real, control de habitaciones por unidad individual y sistema de reviews integrado.",
      EN: "Complete hotel management system with administrative panel, real-time reservations, room control by individual unit and integrated review system.",
    },
    tags: [
      { icon: SiFastapi, label: "FastAPI" },
      { icon: FaReact, label: "React" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: FaDocker, label: "Docker" },
    ],
    features: [
      { ES: "Gestión de habitaciones (CRUD)", EN: "Room management (CRUD)" },
      { ES: "Panel administrativo", EN: "Admin dashboard" },
      { ES: "API REST con FastAPI", EN: "REST API with FastAPI" },
      { ES: "Despliegue con Docker", EN: "Docker deployment" },
      { ES: "Reservas en tiempo real", EN: "Real-time reservations" },
    ],
    links: [
      { icon: FaGithub, label: { ES: "GitHub", EN: "GitHub" }, url: "#" },
      {
        icon: FaExternalLinkAlt,
        label: { ES: "Demo", EN: "Live Demo" },
        url: "#",
      },
    ],
  },
  {
    id: 3,
    visual: "p-visual-1",
    icon: "🛒",
    number: "— 03 — ",
    name: {
      ES: "Gestion360 — Sistema de gestión escolar",
      EN: "Gestion360 — School Management System",
    },
    desc: {
      ES: "Sistema completo de gestión hotelera con panel administrativo, reservas en tiempo real, control de habitaciones por unidad individual y sistema de reviews integrado.",
      EN: "Complete hotel management system with administrative panel, real-time reservations, room control by individual unit and integrated review system.",
    },
    tags: [
      { icon: SiFastapi, label: "FastAPI" },
      { icon: FaReact, label: "React" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: FaDocker, label: "Docker" },
    ],
    features: [
      { ES: "Gestión de estudiantes (CRUD)", EN: "Student management (CRUD)" },
      { ES: "Panel administrativo", EN: "Admin dashboard" },
      { ES: "API REST con FastAPI", EN: "REST API with FastAPI" },
      { ES: "Despliegue con Docker", EN: "Docker deployment" },
      { ES: "Calendario académico", EN: "Academic calendar" },
    ],
    links: [
      { icon: FaGithub, label: { ES: "GitHub", EN: "GitHub" }, url: "#" },
      {
        icon: FaExternalLinkAlt,
        label: { ES: "Demo", EN: "Live Demo" },
        url: "#",
      },
    ],
  },
  {
    id: 4,
    visual: "p-visual-1",
    icon: "🛒",
    number: "— 04 — ",
    name: {
      ES: "LuxeHotel — Sistema de gestión hotelera",
      EN: "LuxeHotel — Hotel Management System",
    },
    desc: {
      ES: "Sistema completo de gestión hotelera con panel administrativo, reservas en tiempo real, control de habitaciones por unidad individual y sistema de reviews integrado.",
      EN: "Complete hotel management system with administrative panel, real-time reservations, room control by individual unit and integrated review system.",
    },
    tags: [
      { icon: SiFastapi, label: "FastAPI" },
      { icon: FaReact, label: "React" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: FaDocker, label: "Docker" },
    ],
    features: [
      { ES: "Gestión de habitaciones (CRUD)", EN: "Room management (CRUD)" },
      { ES: "Panel administrativo", EN: "Admin dashboard" },
      { ES: "API REST con FastAPI", EN: "REST API with FastAPI" },
      { ES: "Despliegue con Docker", EN: "Docker deployment" },
      { ES: "Reservas en tiempo real", EN: "Real-time reservations" },
    ],
    links: [
      { icon: FaGithub, label: { ES: "GitHub", EN: "GitHub" }, url: "#" },
      {
        icon: FaExternalLinkAlt,
        label: { ES: "Demo", EN: "Live Demo" },
        url: "#",
      },
    ],
  },
];
