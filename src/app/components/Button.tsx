"use client";
import React from 'react';
import { ButtonProps } from '@/app/types/components';

const variants: Record<string, string> = {
  primary: "bg-green-600 hover:bg-black text-white",
  secondary: "bg-black hover:bg-green-600 text-white",
  outline: "border border-gray-800 text-gray-800 hover:bg-gray-100",
  ghost: "text-gray-600 hover:underline",
};
const baseStyles = "px-4 py-2 rounded-md font-medium transition duration-200";
const Button =({btnLabel, type,variant="primary", className="", ...rest }:ButtonProps)=>{
    
    return(
        <button {...rest} className={`${variants[variant]} ${baseStyles} ${className} ${type}}`}>
            {btnLabel}
        </button>
    )
 }


 export default Button
