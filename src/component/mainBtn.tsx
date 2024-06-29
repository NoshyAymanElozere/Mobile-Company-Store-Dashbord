type AppProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
function Mainbtn({ children, ...props }: AppProps) {
  return (
    <>
      <button
        type="submit"
        {...props}
        className=" flex items-center gap-1  rounded-lg bg-indigo-600 hover:bg-indigo-800 hover:translate-y-[-3px] shadow-lg duration-700 px-5 py-3 text-sm font-medium text-white"
      >
        {children}
      </button>
    </>
  );
}

export default Mainbtn;
