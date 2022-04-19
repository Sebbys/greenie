import { React, useState } from "react";
import { Listbox } from "@headlessui/react";

export default function Sort() {
  const sort = [
    { id: 1, name: "Ascending" },
    { id: 2, name: "Descending" },
  ];

  const [selectedSort, setSelectedSort] = useState(sort[0]);

  return (
    <div class="justify-self-end">
      <span className="text-md font-semibold text-gray-700 mr-2">Sort:</span>
      <Listbox
        value={selectedSort}
        onChange={setSelectedSort}
        as="div"
        class="relative inline-block"
      >
        {/* <!-- Dropdown toggle button --> */}
        <Listbox.Button class="flex relative z-10 block p-2 text-gray-700 bg-white border border-gray-100 rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
          {selectedSort.name}
          <svg
            class="self-center ml-2 w-5 h-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </Listbox.Button>

        {/* <!-- Dropdown menu --> */}
        <Listbox.Options
          as="div"
          class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
        >
          {sort.map((s) => (
            <Listbox.Option
              key={s.id}
              value={s}
              class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
            >
              {s.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
