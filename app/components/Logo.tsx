export function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#C9930A" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="9" fill="#0F172A" />
      <path
        d="M 29.19 27.71 A 12 12 0 1 0 29.19 12.29"
        fill="none"
        stroke="url(#gold-g)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LogoWordmark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoIcon size={36} />
      <span
        className={`text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-[#0F172A]'}`}
      >
        Clientaro
      </span>
    </div>
  )
}
