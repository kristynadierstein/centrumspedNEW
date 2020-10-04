import React from "react";

export const TitleDecoration = ({ className }) => {
  return (
    <svg
      className={className ? className : ""}
      width="58"
      height="21"
      viewBox="0 0 58 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="38.3389"
        y="0.98291"
        width="19.661"
        height="19.661"
        fill="#133C8B"
      />
      <rect
        x="16.7119"
        y="2.94873"
        width="14.7458"
        height="14.7458"
        fill="#133C8B"
        fill-opacity="0.75"
      />
      <rect
        y="5.89844"
        width="9.83051"
        height="9.83051"
        fill="#133C8B"
        fill-opacity="0.5"
      />
    </svg>
  );
};
