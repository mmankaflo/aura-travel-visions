import type { ReactNode } from "react";

export function PageHero({
  title,
  subtitle,
  image,
  children,
}: {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 container-x h-full flex flex-col justify-end pb-16 text-white">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] animate-float-up">
          Aura Travel & Tours
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-semibold max-w-3xl animate-float-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85 animate-float-up">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6 animate-float-up">{children}</div>}
      </div>
    </section>
  );
}
