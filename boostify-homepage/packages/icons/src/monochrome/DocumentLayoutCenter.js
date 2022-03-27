import React from 'react';

export default function DocumentLayoutCenter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-tertiary" d="M21 8H19a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM21 12H19a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM5 8H3A1 1 0 0 1 3 6H5A1 1 0 0 1 5 8zM5 12H3a1 1 0 0 1 0-2H5a1 1 0 0 1 0 2z" />
      <rect width={8} height={8} x={8} y={4} className="uim-primary" rx={1} />
      <path className="uim-tertiary" d="M21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 20H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z" />
    </svg>
  );
}
