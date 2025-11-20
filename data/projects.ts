export type Project = {
    title: string
    description: string
    tech: string[]
    github: string
    link: string
    notes?: string
    image: string
  }
  
  export const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description:
        "A modern developer portfolio built with Next.js 14, TailwindCSS, and shadcn/ui components.",
      tech: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
      github: "https://github.com/yourname/portfolio",
      link: "https://yourdomain.com",
      notes: "Deployed on Vercel with dynamic routes.",
      image: "/images/yucode.jpg",
    },
    {
      title: "Task Manager App",
      description:
        "A sleek to-do app with persistent storage, drag-and-drop tasks, and dark mode.",
      tech: ["React", "Zustand", "Vite", "TailwindCSS"],
      github: "https://github.com/yourname/task-manager",
      link: "https://tasks.yourdomain.com",
      notes: "Uses Zustand for lightweight state management.",
      image: "/images/me.jpeg",
    },
    {
      title: "AI Blog Generator",
      description:
        "Generate SEO-friendly blog posts with AI, built on the OpenAI API.",
      tech: ["Next.js", "OpenAI API", "Supabase", "TailwindCSS"],
      github: "https://github.com/yourname/ai-blog-generator",
      link: "https://aiblog.yourdomain.com",
      notes: "Auth and DB handled by Supabase.",
      image: "/images/ai-blog.png",
    },
    {
      title: "Live Collaboration Whiteboard",
      description:
        "Real-time brainstorming canvas with multiplayer cursors, sticky notes, and audio rooms.",
      tech: ["Next.js", "Convex", "WebRTC", "TailwindCSS"],
      github: "https://github.com/yourname/live-whiteboard",
      link: "https://whiteboard.yourdomain.com",
      notes: "Optimized for low latency with CRDT syncing.",
      image: "/images/me2.jpg",
    },
    {
      title: "Crypto Insights Dashboard",
      description:
        "Data-rich dashboard with streaming prices, AI-written summaries, and custom alerts.",
      tech: ["Next.js", "tRPC", "Prisma", "PlanetScale"],
      github: "https://github.com/yourname/crypto-insights",
      link: "https://crypto.yourdomain.com",
      notes: "Features theming + personalized watchlists.",
      image: "/images/me3.jpg",
    },
    {
      title: "Studio Booking Platform",
      description:
        "Bookings, payments, and CRM for creative studios with email automations.",
      tech: ["Remix", "PostgreSQL", "Stripe", "TailwindCSS"],
      github: "https://github.com/yourname/studio-booking",
      link: "https://studio.yourdomain.com",
      notes: "Includes admin analytics and audit logs.",
      image: "/images/me4.jpg",
    },
  ]
  