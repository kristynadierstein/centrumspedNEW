import React from 'react';

export const EscBtn = ({ className,  clickHandler = () => console.log("default click handler"), }) => {
  return (
    <svg
      className={className ? className : ''}
      onClick={clickHandler ? clickHandler : ""}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.9907 1.70639L0.848528 15.8485L0 15L14.1421 0.857865L14.9907 1.70639Z'
        fill='#ffffff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.2936 15.9907L0.151472 1.84853L1 1L15.1421 15.1421L14.2936 15.9907Z'
        fill='#ffffff'
      />
    </svg>
  );
};
