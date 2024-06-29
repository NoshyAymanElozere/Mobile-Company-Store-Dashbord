import React from "react";
type AppProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function PasswordInput({ className, ...props }: AppProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        {...props}
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow"
      />
      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </span>
    </div>
  );
}
