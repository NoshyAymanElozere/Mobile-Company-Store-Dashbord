import LodingBtn from "./lodingBtn";

type CustomFormProps = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLFormElement>;

export default function CustomForm({
  className,
  children,
  ...props
}: CustomFormProps) {
  return (
    <div className="mx-auto max-w-screen-xl px-2 py-7 sm:px-6 lg:px-8 shadow m-7 dark:shadow-white rounded-xl dark:bg-[#1a103d] dark:text-white duration-700">
      <form {...props} className={`mx-auto p-5 ${className}`}>
        <div className=" w-full item-center content-center gap-5 md:gap-9 py-2 sm:py-4">
          {children}
        </div>
      </form>
    </div>
  );
}
