// Server Component — all animations are CSS-only, no client hooks needed
export function FilipLogo() {
  return (
    <a href="#" aria-label="Filip — back to top" className="filip-logo">
      <span className="logo-letter">f</span>
      {/* Dot rendered before the character so it stacks above the native 'i' dot */}
      <span className="logo-letter">
        <span className="logo-dot logo-dot-1" aria-hidden="true" />i
      </span>
      <span className="logo-letter">l</span>
      <span className="logo-letter">
        <span className="logo-dot logo-dot-2" aria-hidden="true" />i
      </span>
      <span className="logo-letter">p</span>
    </a>
  );
}
