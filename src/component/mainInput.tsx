type AppProps = {
  className?: string;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
function MainInput({ className, label, ...props }: AppProps) {
  return (
    <div className="w-full ">
      {label && (
        <label
          className={`block text-sm font-medium text-gray-700 py-2  ${className} text-black`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${className}`}>
        <input
          {...props}
          className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
        />
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
      </div>
    </div>
  );
}

// google is the most

export default MainInput;
