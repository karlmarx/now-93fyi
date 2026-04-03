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
              Most of my energy goes into tools for people whose needs the
              mainstream tech industry tends to ignore&mdash;or worse, to
              exploit.
            </p>
            <p>
              <a
                href="https://trickadvisor.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline decoration-accent/30 underline-offset-4"
              >
                <strong>TrickAdvisor</strong>
              </a>{" "}
              is an anonymous review platform for gay men&rsquo;s hookup spots.
              The premise is simple: honest, community-sourced information about
              places that don&rsquo;t advertise. The challenge is building trust
              and safety into a system designed around anonymity.
            </p>
            <p>
              <a
                href="https://nfit.93.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline decoration-accent/30 underline-offset-4"
              >
                <strong>nwbfit</strong>
              </a>{" "}
              tracks workouts with a difference&mdash;it adjusts
              recommendations based on MRI data, building exercise programs
              around your actual body rather than population averages.
            </p>
            <p>
              <a
                href="https://nyoga.93.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline decoration-accent/30 underline-offset-4"
              >
                <strong>nwb-yoga</strong>
              </a>{" "}
              is a yoga companion that takes the same body-aware approach,
              adapting practice to individual anatomy and capacity.
            </p>
            <p>
              All of these live under{" "}
              <a
                href="https://93.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline decoration-accent/30 underline-offset-4"
              >
                <strong>93.fyi</strong>
              </a>
              , my personal domain hub.
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
              <em className="text-fg not-italic font-semibold">
                The ethics of anonymous digital spaces.
              </em>{" "}
              Building TrickAdvisor means sitting with the tension between
              anonymity as liberation and anonymity as license. Queer spaces
              have always depended on the ability to be present without being
              identified&mdash;cruising culture is, among other things, a
              technology for survival. But every system that protects
              vulnerability also creates cover for harm. I don&rsquo;t have
              clean answers. I&rsquo;m building anyway.
            </p>
            <p>
              <em className="text-fg not-italic font-semibold">
                Fitness data sovereignty.
              </em>{" "}
              Your body generates extraordinary amounts of data&mdash;heart
              rate, gait patterns, muscle composition, spinal curvature. Most
              of it flows straight into corporate databases the moment you clip
              on a tracker. nwbfit is partly an argument that this information
              belongs to you, and that meaningful fitness guidance requires
              keeping it close rather than handing it over.
            </p>
            <p>
              <em className="text-fg not-italic font-semibold">
                Yoga and body image.
              </em>{" "}
              Yoga&rsquo;s Western iteration has a representation problem and a
              body problem&mdash;the dominant aesthetic is thin, white, flexible
              in ways that feel more performative than functional. nwb-yoga
              starts from the opposite premise: every body is a yoga body, and
              the practice should adapt to the person, not the other way
              around.
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
              Based in Florida, on Eastern time. The
              humidity is a character flaw I&rsquo;ve learned to live with.
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
