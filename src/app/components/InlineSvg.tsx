import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

export default function InlineSvg({ color = 'currentColor', className, style, ...rest }: Props) {
  return (
    <>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="300"
        height="350"
        fill="none"
        className={className}
        style={style}
        role="img"
        aria-hidden="false"
        {...rest}
        >
        <g clipPath="url(#clip0_2009_36)">
            <mask id="mask0_2009_36" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M24 0H0V24H24V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_2009_36)">
            <path
                d="M2 22H22"
                stroke={color}
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10V22H7V13.99"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </g>
        </g>
            <defs>
                <clipPath id="clip0_2009_36">
                <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

       
    
    </>
  );
}
