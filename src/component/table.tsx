import Mainbtn from "./mainBtn";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoMdAddCircle } from "react-icons/io";
import { handleFormModel } from "../hooks/constants";
import { Link } from "react-router-dom";

const Table = () => {
  const showPopup = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <div className="flex items-center justify-between flex-wrap mt-9 gap-1 py-3 ">
        <div className="flex items-center  gap-1">
          <label className="text-sm">Search :</label>
          <input
            type="text"
            className=" w-[200px] sm:w-[350px] rounded-md border h-8 py-2.5 pe-10 shadow-sm sm:text-sm ps-2"
          />
        </div>
        <Mainbtn onClick={handleFormModel}>
          <IoMdAddCircle className="text-lg " />
          <span>اضافة</span>
        </Mainbtn>
      </div>

      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="text-sm min-w-full overflow-x-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 flex items-center justify-between text-black text-lg py-4 text-right">
                <FaEdit className=" hover:text-green-500 hover:scale-125  duration-700 cursor-pointer " />

                <MdDelete
                  className=" hover:text-red-600 hover:scale-125 duration-700  cursor-pointer"
                  onClick={showPopup}
                />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 flex items-center justify-between text-black text-lg py-4 text-right">
                <FaEdit className=" hover:text-green-500 hover:scale-125  duration-700 cursor-pointer " />
                <MdDelete
                  className=" hover:text-red-600 hover:scale-125 duration-700  cursor-pointer"
                  onClick={showPopup}
                />{" "}
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 flex items-center justify-between text-black text-lg py-4 text-right">
                <FaEdit className=" hover:text-green-500 hover:scale-125  duration-700 cursor-pointer " />
                <MdDelete
                  className=" hover:text-red-600 hover:scale-125 duration-700  cursor-pointer"
                  onClick={showPopup}
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* start paginatiob  */}

      <div className="flex  flex-wrap items-center justify-between">
        <div className="flex items-center mt-9 gap-1  ">
          <label className="text-sm">Show </label>
          <select className="w-16 h-8 border rounded-lg border-gray-300 text-gray-700 sm:text-sm">
            <option value="1">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <label className="text-sm">entries </label>
        </div>

        <ol className="flex justify-end text-xs font-medium mt-9 ">
          <li>
            <Link
              to="#"
              className="inline-flex w-16 h-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="text-sm text-gray-400">Prev</span>
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex w-16 h-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="text-sm text-gray-400">Next </span>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Table;
