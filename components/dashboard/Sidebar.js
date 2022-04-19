import { Syringe } from "@styled-icons/fluentui-system-regular";
import { Dashboard } from "@styled-icons/material-outlined";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-initial flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <Link href="/">
        <a className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700">
          Greenie
        </a>
      </Link>

      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <a
            className="flex items-center px-4 py-2 mt-5 text-white bg-green-500 transition-colors duration-200 transform rounded-md hover:bg-green-500 hover:text-white"
            href="#"
          >
            <Dashboard size="24" />

            <span className="mx-4 font-medium">Dashboard</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-green-500 hover:text-white"
            href="#"
          >
            <Syringe size="24" />

            <span className="mx-4 font-medium">Diagnose</span>
          </a>
        </nav>

        <div className="px-4 -mx-2">
          <Link href="/dashboard">
            <a className="block mx-2 px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-green-600 rounded-lg lg:mt-0 hover:bg-green-500 lg:w-auto">
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
