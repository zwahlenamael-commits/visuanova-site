export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Logo VisuaNova Studio"
    >
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0fdf4" />
        </linearGradient>
      </defs>
      
      {/* Main circle */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
      
      {/* Inner white circle */}
      <circle cx="50" cy="50" r="38" fill="white" />
      
      {/* Abstract "V" shape made of geometric elements */}
      <path 
        d="M 35 30 L 50 60 L 65 30" 
        stroke="url(#logoGradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Star/Nova symbol at the top */}
      <circle cx="50" cy="22" r="4" fill="url(#logoGradient)" />
      <path 
        d="M 50 18 L 50 26 M 46 22 L 54 22 M 47 19 L 53 25 M 47 25 L 53 19" 
        stroke="url(#logoGradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Accent dots for "Nova" burst effect */}
      <circle cx="35" cy="70" r="3" fill="#10b981" opacity="0.8" />
      <circle cx="50" cy="75" r="3" fill="#f59e0b" opacity="0.8" />
      <circle cx="65" cy="70" r="3" fill="#ec4899" opacity="0.8" />
    </svg>
  );
}
