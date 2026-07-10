export function CleanPlanHeroBackground() {
  return (
    <div className="cleanplan-hero-bg" aria-hidden="true">
      <div className="cleanplan-hero-bg__base" />

      <svg
        className="cleanplan-hero-bg__art"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cp-blob-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="45%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
          <linearGradient id="cp-blob-soft" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ddd6fe" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
          <linearGradient id="cp-sphere" x1="30%" y1="20%" x2="70%" y2="80%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="55%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
          <filter id="cp-blob-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#8b9cf7" floodOpacity="0.22" />
          </filter>
          <filter id="cp-sphere-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#7c8fd6" floodOpacity="0.28" />
          </filter>
        </defs>

        <path
          filter="url(#cp-blob-shadow)"
          fill="url(#cp-blob-main)"
          d="M1180,-40 C1320,40 1420,180 1440,340 C1460,520 1360,680 1240,760 C1100,850 940,820 860,700 C780,580 820,420 920,300 C1020,180 1040,40 1180,-40 Z"
        />
        <path
          fill="url(#cp-blob-soft)"
          opacity="0.92"
          d="M1040,120 C1140,80 1260,140 1300,260 C1340,380 1280,500 1180,560 C1080,620 960,580 900,480 C840,380 900,200 1040,120 Z"
        />

        <circle cx="1180" cy="620" r="92" fill="url(#cp-sphere)" filter="url(#cp-sphere-shadow)" />
        <circle cx="1020" cy="500" r="58" fill="url(#cp-sphere)" filter="url(#cp-sphere-shadow)" opacity="0.95" />
        <circle cx="1320" cy="420" r="44" fill="url(#cp-sphere)" filter="url(#cp-sphere-shadow)" opacity="0.88" />
      </svg>

      <div className="cleanplan-hero-bg__glow cleanplan-hero-bg__glow--a" />
      <div className="cleanplan-hero-bg__glow cleanplan-hero-bg__glow--b" />
    </div>
  );
}
