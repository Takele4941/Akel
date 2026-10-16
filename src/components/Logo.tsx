export default function Logo({ size = 72 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Akel Cafe logo"
    >
      {/* saucer */}
      <ellipse cx="48" cy="76" rx="30" ry="6" fill="#32190E" opacity="0.12" />
      {/* cup body */}
      <path
        d="M22 40 h44 v10 c0 13.4 -9.6 24 -22 24 s-22 -10.6 -22 -24 z"
        fill="#32190E"
      />
      {/* handle */}
      <path
        d="M66 42 c8 0 12 4.4 12 10 s-4 10 -12 10"
        stroke="#32190E"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* cream band on cup */}
      <path d="M22 46 h44 v4 h-44 z" fill="#F5F0E8" opacity="0.9" />
      {/* coffee bean dot */}
      <circle cx="44" cy="60" r="5" fill="#C91F26" />
      <path
        d="M44 55.5 c-2.4 2.4 -2.4 6.6 0 9"
        stroke="#F5F0E8"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* steam */}
      <g className="steam" stroke="#C91F26" strokeWidth="3.4" strokeLinecap="round" fill="none">
        <path d="M38 32 c-2.6 -3.4 2.6 -5.6 0 -9.4" />
        <path d="M52 32 c-2.6 -3.4 2.6 -5.6 0 -9.4" />
      </g>
    </svg>
  )
}
