export default function NowPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <article className="fade-up text-center">
        <h1 className="font-heading text-[4rem] sm:text-[5.5rem] font-light leading-[0.9] tracking-tight text-fg mb-6">
          Now
        </h1>
        <p className="font-prose italic text-fg-muted text-lg sm:text-xl">
          Under construction.
        </p>
        <div className="mt-8 mx-auto h-[1px] w-16 bg-accent/40" />
      </article>
    </main>
  );
}
