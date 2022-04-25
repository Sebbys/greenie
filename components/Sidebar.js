import { Icon } from "@iconify/react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "ic:outline-dashboard",
  },
  {
    name: "Diagnose",
    href: "/diagnose",
    icon: "fluent:syringe-20-regular",
  },
];

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="flex flex-initial flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <Link href="/">
        <a className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700">
          Greenie
        </a>
      </Link>

      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
          <Icon icon="bx:search" width="24" height="24" />
        </span>

        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <Menu as="nav">
          <Menu.Items as="div" static>
            {navigation.map((item, index) => (
              <Menu.Item as="div" key={index}>
                <Link href={item.href}>
                  <a
                    className={
                      router.pathname === item.href
                        ? "flex items-center px-4 py-2 mt-5 text-white bg-green-500 transition-colors duration-200 transform rounded-md hover:bg-green-500 hover:text-white"
                        : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-green-500 hover:text-white"
                    }
                  >
                    <Icon icon={item.icon} width="24" height="24" />

                    <span className="mx-4 font-medium">{item.name}</span>
                  </a>
                </Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>

        <div className="px-4 -mx-2">
          <Link href={`${process.env.URL_API}admin`}>
            <a className="block mx-2 px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-green-600 rounded-lg lg:mt-0 hover:bg-green-500 lg:w-auto">
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
