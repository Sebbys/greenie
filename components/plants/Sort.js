import { Listbox } from "@headlessui/react";
import { Icon } from "@iconify/react";

const Sort = (props) => {
  return (
    <>
      <span className="text-md font-semibold text-gray-700 mr-2">Sort:</span>
      <Listbox
        value={props.selectedSort}
        onChange={props.setSelectedSort}
        as="div"
        className="relative inline-block"
      >
        {/* <!-- Dropdown toggle button --> */}
        {({ open }) => (
          <>
            <Listbox.Button className="flex relative w-32 z-10 block p-2 text-gray-700 bg-white border border-gray-100 rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
              <p className="grow">{props.selectedSort.name}</p>
              {open ? (
                <Icon
                  className="self-center ml-1 mt-1"
                  icon="dashicons:arrow-up-alt2"
                  size="20"
                />
              ) : (
                <Icon
                  className="self-center ml-1 mt-1"
                  icon="dashicons:arrow-down-alt2"
                  size="20"
                />
              )}
            </Listbox.Button>
            {/* <!-- Dropdown menu --> */}
            <Listbox.Options
              as="div"
              className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
            >
              {props.sort.map((s) => (
                <Listbox.Option
                  key={s.id}
                  value={s}
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
                >
                  {s.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </>
  );
};

export default Sort;
