const now = new Date();
const fullDate = now.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
const monthYear = now.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

export default function NowPage() {
  return (
    <main className="min-h-screen flex justify-center px-6 py-20 sm:py-32">
      <article className="w-full max-w-[680px]">
        {/* Header */}
        <header className="fade-up mb-16 sm:mb-24">
          <h1
            className="font-heading text-[4rem] sm:text-[5.5rem] font-light leading-[0.9] tracking-tight text-fg mb-6"
          >
            Now
          </h1>
          <p className="font-prose italic text-fg-muted text-lg sm:text-xl">
            What I&rsquo;m up to, as of {fullDate}
          </p>
          <div
            className="mt-8 h-[1px] w-16 bg-accent/40"
          />
        </header>

        {/* Building */}
        <section
          className="fade-up mb-14 sm:mb-20"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="font-heading italic text-accent text-2xl sm:text-[1.75rem] mb-6 leading-snug">
            Building
          </h2>
          <div className="font-prose text-[1.125rem] leading-[1.85] space-y-5 text-fg/90">
            <p>
              Stress fractured my femur. Needed to keep training around it.
              Built{" "}
              <a href="https://nfit.93.fyi" target="_blank" rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline decoration-accent/30 underline-offset-4">
                nwbfit
              </a>{" "}
              and{" "}
              <a href="https://nyoga.93.fyi" target="_blank" rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline decoration-accent/30 underline-offset-4">
                nwb-yoga
              </a>{" "}
              to adjust my own workouts around MRI data. They&rsquo;re public now.
            </p>
            <p>
              A friend had an idea for a hookup review app for gay men over dinner.
              Built{" "}
              <a href="https://trickadvisor.cc" target="_blank" rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline decoration-accent/30 underline-offset-4">
                TrickAdvisor
              </a>{" "}
              that night using Claude Code. Anonymous, community-sourced.
            </p>
          </div>
        </section>

        {/* Thinking about */}
        <section
          className="fade-up mb-14 sm:mb-20"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="font-heading italic text-accent text-2xl sm:text-[1.75rem] mb-6 leading-snug">
            Thinking about
          </h2>
          <div className="font-prose text-[1.125rem] leading-[1.85] space-y-5 text-fg/90">
            <p>
              Whether anonymous spaces protect people or just give cover. Both, probably.
              Still building TrickAdvisor.
            </p>
            <p>
              Why fitness apps need your data to live on their servers.
              nwbfit keeps it local.
            </p>
            <p>
              Yoga studios that look like they were cast. The practice should fit the body, not the other way.
            </p>
          </div>
        </section>

        {/* Reading & watching */}
        <section
          className="fade-up mb-14 sm:mb-20"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="font-heading italic text-accent text-2xl sm:text-[1.75rem] mb-6 leading-snug">
            Reading &amp; watching
          </h2>
          <div className="font-prose text-[1.125rem] leading-[1.85] text-fg-muted italic">
            <p>
              Update this section in{" "}
              <code className="text-fg-muted not-italic text-sm font-mono bg-fg/5 px-1.5 py-0.5 rounded">
                app/page.tsx
              </code>
            </p>
          </div>
        </section>

        {/* Location */}
        <section
          className="fade-up mb-20 sm:mb-28"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="font-heading italic text-accent text-2xl sm:text-[1.75rem] mb-6 leading-snug">
            Location
          </h2>
          <div className="font-prose text-[1.125rem] leading-[1.85] text-fg/90">
            <p>
              Based in Florida, on Eastern time.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="fade-up pt-10 border-t border-fg/8"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="font-prose text-sm text-fg-muted tracking-wide">
            Updated {monthYear} &middot;{" "}
            <a
              href="https://93.fyi"
              className="text-accent/70 hover:text-accent"
            >
              93.fyi
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}
