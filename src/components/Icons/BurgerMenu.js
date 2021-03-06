
import React from 'react';

export const BurgerMenu = ({ className }) => {
  return (
    <svg
      className={className ? className : ''}
      width='21'
      height='16'
      viewBox='0 0 21 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line
        x1='0.748047'
        y1='1.4'
        x2='20.748'
        y2='1.4'
        stroke='#001349'
        strokeWidth='1.2'
      />
      <line
        x1='0.748047'
        y1='8.4'
        x2='20.748'
        y2='8.4'
        stroke='#001349'
        strokeWidth='1.2'
      />
      <line
        x1='0.748047'
        y1='15.4'
        x2='20.748'
        y2='15.4'
        stroke='#001349'
        strokeWidth='1.2'
      />
    </svg>
  );
};
