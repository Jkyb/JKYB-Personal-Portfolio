// Smaller, curiosity-driven experiments. Kept separate from `projects.js`
// since these are lightweight prototypes rather than full case studies.

import handtrackingImage from "./images/experimentalprojects/hand_tracking.png";
import typingGameImage from "./images/experimentalprojects/typing_game.png";
import randomVerseImage from "./images/experimentalprojects/random_bible_verse.png";

export const experiments = [
  {
    id: "hand-tracking",
    title: "Hand Tracking",
    description: "Camera-based hand tracking and interaction experiment.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: handtrackingImage,
    links: {
      demo: null, // TODO: Add Hand Tracking URL
      source: null,
    },
  },
  {
    id: "typing-game",
    title: "Typing Game",
    description:
      "Browser-based typing game exploring keyboard input and real-time interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: typingGameImage,
    links: {
      demo: null, // TODO: Add Typing Game URL
      source: null,
    },
  },
  {
    id: "random-verse-generator",
    title: "Random Verse Generator",
    description:
      "Small browser experiment that dynamically generates Bible verses.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: randomVerseImage,
    links: {
      demo: null, // TODO: Add Random Verse Generator URL
      source: null,
    },
  },
];
