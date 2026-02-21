// src/types/components.d.ts

export type ButtonVariant = "primary" | "outline" | "ghost" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnLabel?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

export interface homeProps extends React.ComponentProps{
  className: string;
}; 
