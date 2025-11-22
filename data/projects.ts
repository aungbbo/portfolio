export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  link: string
  winner?: boolean
  image: string
}

export const projects: Project[] = [
  {
    title: "Jade.AI",
    description:
      "Jade.AI is an all-in-one AI platform for data analysis that can clean, analyze, and visualize data using simple English. It leverages Groq as the main LLM for reasoning and runs pandas code in the backend to deliver 5x faster responses. Won 1st place out of 73 teams for \"Best Use of Groq\" at Cal Hacks 12.0.",
    tech: ["Groq", "FastAPI", "Python", "Next.js", "TypeScript", "Pandas"],
    github: "https://github.com/erik-ksth/jade-ai",
    link: "https://devpost.com/software/jadeai",
    image: "/images/jadeai.jpg",
    winner: true,
  },
  {
    title: "MindOrbit",
    description:
      "MindOrbit is a multi-scence spatial productivity workspace designed for WebSpatial and XR that reimagines studying and organization in 3D. It lets users arrange floating panels for notes, music, and planning in an interactive, XR-ready environment that feels natural and immersive.",
    tech: ["React", "TailwindCSS", "TypeScript", "WebSpatial SDK", "Vision Pro"],
    github: "https://github.com/aungbbo/XRHacks25",
    link: "https://devpost.com/software/abc-4ogw9r",
    image: "/images/mindorbit.jpg",
  },
  {
    title: "Trekteria",
    description:
      "Trekteria is an AI-powered camping planner app that creates personalized itineraries based on user preferences and location. It helps travelers discover the best campsites, routes, and activities through intelligent, data-driven recommendations.",
    tech: ["React Native", "Expo", "Gemini API", "Supabase", "SQLite", "RESTful APIs"],
    github: "https://github.com/Trekteria/trekteria",
    link: "https://apps.apple.com/us/app/trekteria-outdoors-planner/id6745873086",
    image: "/images/trekteria.jpg",
  },
  {
    title: "YuCode",
    description:
      "YuCode is an AI-native technical interview preparation and learning platform that provides personalized, real-time feedback on both coding and communication skills. It leverages the Claude AI for adaptive grading and features a custom IDE that captures keystrokes and audio to simulate real interview experiences.",
    tech: ["Next.js", "Typescript", "Flask", "Claude API", "Vercel"],
    github: "https://github.com/michaelpeters-dev/HackMIT_2025",
    link: "https://hackmit2025.vercel.app",
    image: "/images/yucode.jpg",
  },
  {
    title: "Gita",
    description:
      "Gita is an AI app that automatically generates copyright-free background music tailored to the vibe of any video. It leverages Google ADK to enable multiple AI agents to communicate, handle video uploads, analyze video context, generate matching music, and combine the video and music, reducing the manual effort for content creators required in the editing process.",
    tech: ["Python", "FastAPI", "Google ADK", "Groq", "Supabase"],
    github: "https://github.com/erik-ksth/gita",
    link: "https://devpost.com/software/gita-ai-powered-video-to-music-generation-platform",
    image: "/images/gita.jpg",
  },
  {
    title: "SJ Snap",
    description:
      "SJ Snap is a web app similar to San Jose 311 but enhanced with AI to make reporting city-related issues faster and more accurate. It integrates report verification, location detection, and issue tracking to minimize errors and ensure only accurate reports are submitted to city services.",
    tech: ["Next.js", "Typescript", "Gemini API", "Supabase", "Mapbox"],
    github: "https://github.com/erik-ksth/SJ.Snap",
    link: "https://devpost.com/software/sj-snap",
    image: "/images/sjsnap.jpg",
  },
]
