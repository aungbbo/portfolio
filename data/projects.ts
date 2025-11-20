export type Project = {
    title: string
    description: string
    tech: string[]
    github: string
    link: string
    image: string
  }
  
  export const projects: Project[] = [
    {
      title: "Jade.AI",
      description:
        "A modern developer portfolio built with Next.js 14, TailwindCSS, and shadcn/ui components.",
      tech: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
      github: "https://github.com/yourname/portfolio",
      link: "https://yourdomain.com",
      image: "/images/yucode.jpg",
    },
    {
      title: "MindOrbit",
      description:
        "A sleek to-do app with persistent storage, drag-and-drop tasks, and dark mode.",
      tech: ["React", "Zustand", "Vite", "TailwindCSS"],
      github: "https://github.com/yourname/task-manager",
      link: "https://tasks.yourdomain.com",
      image: "/images/me.jpeg",
    },
    {
      title: "YuCode",
      description:
        "Generate SEO-friendly blog posts with AI, built on the OpenAI API.",
      tech: ["Next.js", "OpenAI API", "Supabase", "TailwindCSS"],
      github: "https://github.com/yourname/ai-blog-generator",
      link: "https://aiblog.yourdomain.com",
      image: "/images/ai-blog.png",
    },
    {
      title: "Gita",
      description:
        "Real-time brainstorming canvas with multiplayer cursors, sticky notes, and audio rooms.",
      tech: ["Next.js", "Convex", "WebRTC", "TailwindCSS"],
      github: "https://github.com/yourname/live-whiteboard",
      link: "https://whiteboard.yourdomain.com",
      image: "/images/me2.jpg",
    },
    {
      title: "SJ Snap",
      description:
        "Data-rich dashboard with streaming prices, AI-written summaries, and custom alerts.",
      tech: ["Next.js", "tRPC", "Prisma", "PlanetScale"],
      github: "https://github.com/yourname/crypto-insights",
      link: "https://crypto.yourdomain.com",
      image: "/images/me3.jpg",
    },
    {
      title: "StockSearch",
      description:
        "Bookings, payments, and CRM for creative studios with email automations.",
      tech: ["Remix", "PostgreSQL", "Stripe", "TailwindCSS"],
      github: "https://github.com/yourname/studio-booking",
      link: "https://studio.yourdomain.com",
      image: "/images/me4.jpg",
    },
  ]
  