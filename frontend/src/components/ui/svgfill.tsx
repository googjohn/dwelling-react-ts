import { FaHouse } from 'react-icons/fa6';

export const GradientIcon = () => {
  const size = `clamp(4rem,5vw,6rem)`
  return (
    <div style={{ position: 'relative' }}>
      {/* 1. Define the gradient in a hidden SVG */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="my-gradient" x1="0%" y1="10%" x2="20%" y2="90%">
            <stop offset="0%" stopColor="oklch(100% 0.00011 271.152)" />
            <stop offset="100%" stopColor="#229b50" />
          </linearGradient>
        </defs>
      </svg>
      <FaHouse size={size} fill="url(#my-gradient)" className='' />
    </div>
  );
}    