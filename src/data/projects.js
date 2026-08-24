// Structured project data.
//
// This is intentionally kept as plain data (no framework-specific logic) so
// it can later be swapped for a Supabase/PostgreSQL-backed fetch without
// changing how components consume it. Each project follows the same shape,
// which makes it easy to render dynamically and to add new projects.
//
// image / gallery: imported from `src/data/images/`. Until an image is
// available, `image: null` triggers the <ImagePlaceholder /> component.

import manaMakawatHome from "./images/mana_makawat/mana_makawat_home.jpg";
import manaMakawat01 from "./images/mana_makawat/mana_makawat_01.jpg";
import manaMakawat02 from "./images/mana_makawat/mana_makawat_02.jpg";
import manaMakawat03 from "./images/mana_makawat/mana_makawat_03.jpg";
import manaMakawat04 from "./images/mana_makawat/mana_makawat_04.jpg";

import fundraisingVisualizer from "./images/fundraising_visualizer.png";

import psuGoa01 from "./images/psu_goa_3D_model/PSU_GOA_3D_01.png";
import psuGoa02 from "./images/psu_goa_3D_model/PSU_GOA_3D_02.png";
import psuGoa03 from "./images/psu_goa_3D_model/PSU_GOA_3D_03.png";
import psuGoa04 from "./images/psu_goa_3D_model/PSU_GOA_3D_04.png";
import psuGoa05 from "./images/psu_goa_3D_model/PSU_GOA_3D_05.png";
import psuGoa06 from "./images/psu_goa_3D_model/PSU_GOA_3D_06.png";
import psuGoa07 from "./images/psu_goa_3D_model/PSU_GOA_3D_07.png";
import psuGoa08 from "./images/psu_goa_3D_model/PSU_GOA_3D_08.png";

import sisScreenshot from "./images/sigs.png";

export const projects = [
  {
    id: "mana-makawat",
    title: "Mana Makawat",
    category: "3D Multiplayer Game",
    year: "2026",
    description:
      "A multiplayer 3D game inspired by traditional Filipino street games, including Patintero and Langit Lupa.",
    longDescription:
      "Mana Makawat reimagines classic Filipino street games as a real-time 3D multiplayer experience. The project covered the full pipeline: game design and logic, 3D asset creation in Blender, and multiplayer networking built on ENet — shipped to both PC and Android.",
    technologies: ["Godot", "GDScript", "ENet", "Blender"],
    highlights: [
      "Game development & core game logic",
      "3D asset creation",
      "Multiplayer networking (ENet)",
      "Player interaction systems",
      "PC and Android deployment",
    ],
    image: manaMakawatHome,
    gallery: [manaMakawat01, manaMakawat02, manaMakawat03, manaMakawat04],
    links: {
      demo: "https://jkyb.itch.io/mana-makawat",
      source: null,
    },
    featured: true,
  },
  {
    id: "fundraising-visualizer",
    title: "Fundraising Visualizer",
    category: "Web Application / Data Visualisation",
    year: "2025",
    description:
      "An interactive fundraising visualisation that connects to Google Sheets through its API and transforms fundraising progress into an intuitive visual representation.",
    longDescription:
      "The application compares the amount raised against a target and represents progress visually through elements such as a filling structure or thermometer — turning a spreadsheet of raw numbers into something instantly understandable. Data → Visualisation → Understanding.",
    technologies: ["JavaScript", "Google Sheets API", "Vercel"],
    highlights: [
      "Live API integration with Google Sheets",
      "Real-time data presentation",
      "Custom visual progress representation",
      "Frontend development & deployment",
    ],
    image: fundraisingVisualizer,
    gallery: [],
    links: {
      demo: "https://fund-raising-visualizer-580003kx0-jkybs-projects.vercel.app/",
      source: null,
    },
    featured: true,
  },
  {
    id: "psu-campus-3d",
    title: "PSU Campus 3D Environment",
    category: "3D / Interactive Experience",
    year: "2024",
    description:
      "A 3D reconstruction of the university campus created for an interactive AR/3D experience for the university's 25th anniversary.",
    longDescription:
      "One environment, multiple experiences. The reconstructed campus was originally built for an interactive AR/3D anniversary experience, then later reused as the environment for a horror game built for a game festival — demonstrating how a single well-built 3D asset can power very different interactive experiences.",
    technologies: ["Blender", "3D Modelling", "Interactive / AR Experience"],
    highlights: [
      "Full 3D campus reconstruction",
      "Built for an interactive AR/3D anniversary experience",
      "Repurposed as a game environment for a horror game",
      "One environment, multiple experiences",
    ],
    image: psuGoa01,
    gallery: [psuGoa02, psuGoa03, psuGoa04, psuGoa05, psuGoa06, psuGoa07, psuGoa08],
    links: {
      demo: "https://sketchfab.com/3d-models/partido-state-university-goa-campus-3d-model-9329344421424ad1ac05ae3719f1ca8a",
      source: null,
    },
    featured: true,
  },
  {
    id: "school-information-system",
    title: "School Information System",
    category: "Application Development",
    year: "2023",
    description:
      "A locally running school information system developed using Python and SQLite, implementing basic CRUD operations for managing school information.",
    longDescription:
      "A desktop application for managing school records locally, built with Python and backed by a SQLite database. Implements create, read, update, and delete operations for core school information.",
    technologies: ["Python", "SQLite"],
    highlights: [
      "CRUD operations for school records",
      "Local SQLite database",
      "Python application development",
    ],
    image: sisScreenshot,
    gallery: [],
    links: {
      demo: null,
      source: null,
    },
    featured: true,
  },
];

export const getProjectById = (id) => projects.find((project) => project.id === id);

export const featuredProjects = projects.filter((project) => project.featured);
