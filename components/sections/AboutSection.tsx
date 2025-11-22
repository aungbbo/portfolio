export function AboutSection() {
  return (
    <section id="about" className="w-full text-center">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm tracking-[0.4em] uppercase">
          About
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">Who am I?</h2>
      </div>
      <p className="text-muted-foreground max-w-3.5xl mx-auto mt-6 pt-6 pl-4 text-left text-lg leading-relaxed">
        Born and raised in Yangon, Myanmar. Moved to the U.S. in 2022 to expand
        my horizons and grow as a software engineer. I’m currently pursuing a
        degree in Computer Science at San Jose State University, with graduation
        expected in December 2026.
        <br />
        <br />
        My work focuses on backend development, with a growing passion for
        agentic AI. I love going to hackathons, meeting new people, and creating
        projects that make a difference. Every day, I aim to learn something new
        and improve by 1%.
        <br />
        <br />
        <span className="text-foreground/60">
          * Currently, I&apos;m looking for a software engineering internship
          for Summer 2026 where I can apply my skills and learn from experienced
          professionals.
        </span>
      </p>
    </section>
  );
}
