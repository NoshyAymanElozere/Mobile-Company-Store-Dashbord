import { useState } from "react";
type loadProps = {
  children?: React.ReactNode;
  loading?: boolean;
} & React.BaseHTMLAttributes<HTMLButtonElement>;

function LodingBtn({ children, loading, ...props }: loadProps) {
  const onSubmitLoding = () => {
    setLoadding(true);
    setTimeout(() => {
      setLoadding(false);
    }, 3000);
  };
  return (
    <>
      {loading ? (
        <button
          className=" rounded border  border-indigo-600 flex item-center justify-center gap-2 px-12 py-3 text-sm font-medium bg-transparent text-indigo-600 focus:outline-none focus:ring  w-full dark:bg-[#1a103d] dark:text-white duration-700"
          disabled
        >
          <span className="pt-1">LODING</span>
          <img src="/src/assets/loader.svg" className="w-7" />
        </button>
      ) : (
        <button
          // onClick={onSubmitLoding}
          className="rounded border duration-700    hover:bg-indigo-700 hover:shadow-xl bg-indigo-600 px-12 py-2 text-lg  font-bold  text-white hover:translate-y-[-3px] focus:outline-none focus:ring active:text-indigo-500 w-full "
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default LodingBtn;
