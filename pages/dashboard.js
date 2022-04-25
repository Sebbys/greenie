import PlantCard from "../components/dashboard/PlantCard";
import Sidebar from "../components/Sidebar";
import { React, useState } from "react";
import { Listbox } from "@headlessui/react";
import useSWR, { SWRConfig } from "swr";
import { Icon } from "@iconify/react";

const url = `${process.env.URL_API}api/plants?${new URLSearchParams({
  populate: "image",
})}`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getServerSideProps = async () => {
  const [plantsRes] = await Promise.all([fetch(url)]);
  const [plants] = await Promise.all([plantsRes.json()]);

  let fallback = {};
  fallback[url] = plants;

  return {
    props: {
      fallback,
    },
  };
};

const Dashboard = () => {
  const sort = [
    { id: 1, name: "Ascending", value: "asc" },
    { id: 2, name: "Descending", value: "desc" },
  ];

  const [selectedSort, setSelectedSort] = useState(sort[0]);

  const { data } = useSWR(url, fetcher);

  return (
    <div className="flex">
      <Sidebar />
      <section className="container p-6 mx-auto bg-white">
        <div className="grid grid-cols-2">
          <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl">
            Plant List
          </h2>

          <div class="justify-self-end">
            <span className="text-md font-semibold text-gray-700 mr-2">
              Sort:
            </span>
            <Listbox
              value={selectedSort}
              onChange={setSelectedSort}
              as="div"
              class="relative inline-block"
            >
              {/* <!-- Dropdown toggle button --> */}
              {({ open }) => (
                <>
                  <Listbox.Button class="flex relative w-32 z-10 block p-2 text-gray-700 bg-white border border-gray-100 rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
                    <p className="grow">{selectedSort.name}</p>
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
                </>
              )}
            </Listbox>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {selectedSort.value == "asc"
              ? data.data.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    name={plant.attributes.name}
                    latin_name={plant.attributes.latin_name}
                    image={
                      plant.attributes.image.data
                        ? plant.attributes.image.data.attributes.url.slice(1)
                        : ""
                    }
                  />
                ))
              : data.data
                  .slice(0)
                  .reverse()
                  .map((plant) => (
                    <PlantCard
                      key={plant.id}
                      name={plant.attributes.name}
                      latin_name={plant.attributes.latin_name}
                      image={
                        plant.attributes.image.data
                          ? plant.attributes.image.data.attributes.url.slice(1)
                          : ""
                      }
                    />
                  ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Page = ({ fallback }) => {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    <SWRConfig value={{ fallback }}>
      <Dashboard />
    </SWRConfig>
  );
};

export default Page;
