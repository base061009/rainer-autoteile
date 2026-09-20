export function SiteBackground() {
  return (
    <div className="site-bg pointer-events-none z-0 overflow-hidden" aria-hidden>
      <div className="hero-mesh absolute -inset-[18%]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_22%,rgba(26,26,26,0.42)_100%)]" />
    </div>
  );
}
