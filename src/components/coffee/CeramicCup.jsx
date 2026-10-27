import React from 'react';

export default function CeramicCup({ id, palette, level, finish }) {
  return (
    <svg viewBox="0 0 320 320" aria-hidden="true" className="ceramic-cup">
      <defs>
        <linearGradient id={`${id}-glaze`} x1="0" x2="1">
          <stop stopColor={palette[2]} />
          <stop offset=".18" stopColor={palette[1]} />
          <stop offset=".43" stopColor={palette[0]} />
          <stop offset=".7" stopColor={palette[1]} />
          <stop offset="1" stopColor={palette[2]} />
        </linearGradient>
        <linearGradient id={`${id}-handle`} x1="0" x2="1">
          <stop stopColor={palette[2]} />
          <stop offset=".55" stopColor={palette[0]} />
          <stop offset="1" stopColor={palette[1]} />
        </linearGradient>
        <radialGradient id={`${id}-coffee`}>
          <stop stopColor="#946244" />
          <stop offset="1" stopColor="#38251c" />
        </radialGradient>
        <clipPath id={`${id}-opening`}>
          <ellipse cx="140" cy="97" rx="78" ry="23" />
        </clipPath>
      </defs>
      <ellipse cx="151" cy="281" rx="111" ry="15" fill="#314e35" opacity=".1" />
      <path d="M223 125 C304 93 311 227 222 225" fill="none" stroke={palette[2]} strokeWidth="25" />
      <path
        d="M223 125 C294 107 299 215 225 215"
        fill="none"
        stroke={`url(#${id}-handle)`}
        strokeWidth="18"
      />
      <path
        d="M52 97 Q140 70 228 97 L218 228 Q216 271 141 276 Q67 273 63 231 Z"
        fill={`url(#${id}-glaze)`}
      />
      <path
        d="M72 122 L81 226 Q84 251 108 257"
        fill="none"
        stroke="white"
        strokeWidth="7"
        opacity=".18"
        strokeLinecap="round"
      />
      <ellipse cx="140" cy="97" rx="88" ry="29" fill={palette[0]} />
      <ellipse cx="140" cy="97" rx="79" ry="23" fill={palette[2]} />
      <g clipPath={`url(#${id}-opening)`}>
        <ellipse cx="140" cy={125 - level * 0.28} rx="78" ry="21" fill={`url(#${id}-coffee)`} />
        <ellipse cx="124" cy={120 - level * 0.28} rx="41" ry="8" fill="#be9065" opacity=".25" />
      </g>
      <ellipse cx="140" cy="97" rx="87" ry="28" fill="none" stroke={palette[0]} strokeWidth="4" />
      <text
        x="142"
        y="174"
        textAnchor="middle"
        fill={finish === 'charcoal' ? '#f5f1df' : '#36533b'}
        fontFamily="Georgia,serif"
        fontSize="22"
        fontStyle="italic"
      >
        curiosity.
      </text>
      <text
        x="142"
        y="195"
        textAnchor="middle"
        fill={finish === 'charcoal' ? '#dedecd' : '#56705a'}
        fontFamily="Arial,sans-serif"
        fontSize="8"
        letterSpacing="2"
      >
        BREW SOMETHING GOOD
      </text>
      <path
        d="M113 54 Q105 41 114 27 M141 49 Q151 35 143 20 M170 54 Q160 43 170 29"
        fill="none"
        stroke="#9bad97"
        strokeWidth="2.5"
        opacity={level > 60 ? '.55' : '.25'}
        strokeLinecap="round"
      />
    </svg>
  );
}
