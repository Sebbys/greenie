import Sidebar from "../components/Sidebar";
import { Combobox, Transition } from "@headlessui/react";
import { React, useState, Fragment } from "react";
import { Icon } from "@iconify/react";
import useSWR from "swr";
import qs from "qs";

export const getServerSideProps = async () => {
  const plantsUrl = `${process.env.URL_API}api/plants?${new URLSearchParams({
    populate: "*",
  })}`;

  const [plantsRes] = await Promise.all([fetch(plantsUrl)]);
  const [plants] = await Promise.all([plantsRes.json()]);
  return { props: { plants } };
};

const Diagnose = ({ plants }) => {
  const [selectedPlant, setSelectedPlant] = useState(plants.data[0]);
  const [query, setQuery] = useState("");
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const queryUrl = qs.stringify(
    {
      populate: ["symptoms", "symptoms.disease", "symptoms.disease.plant"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data: symptoms, error } = useSWR(
    `${process.env.URL_API}api/plant-parts?${queryUrl}`,
    fetcher
  );

  const filteredPlant =
    query === ""
      ? plants.data
      : plants.data.filter((plant) =>
          plant.attributes.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkedSymptoms);
  };

  const handleCheckedSymptoms = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedSymptoms([...checkedSymptoms, e.target.value]);
    } else {
      const index = checkedSymptoms.indexOf(e.target.value);
      checkedSymptoms.splice(index, 1);
      setCheckedSymptoms(checkedSymptoms);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <section className="container p-6 mx-auto bg-white">
        <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl">
          Diagnose Plant
        </h2>

        <Combobox value={selectedPlant} onChange={setSelectedPlant}>
          {({ open }) => (
            <div className="relative mt-5">
              <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left sm:text-sm">
                <Combobox.Input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none"
                  displayValue={(plant) => plant.attributes.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4">
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
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                  {filteredPlant.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPlant.map((plant) => (
                      <Combobox.Option
                        key={plant.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-green-500 text-white" : "text-gray-900"
                          }`
                        }
                        value={plant}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {plant.attributes.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <Icon
                                  className="self-center ml-1 mt-1"
                                  icon="bi:check-lg"
                                  size="20"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          )}
        </Combobox>

        <form onSubmit={handleSubmit}>
          {symptoms &&
            symptoms.data.map((plantPart) => (
              <div key={plantPart.id} className="mt-10">
                <div className="bg-white border border-gray-200">
                  <h2 className="w-full p-4 text-white text-left font-semibold bg-green-600">
                    {plantPart.attributes.name}
                  </h2>
                  <div className="p-4">
                    {plantPart.attributes.symptoms.data.map((symptom) =>
                      symptom.attributes.disease.data.attributes.plant.data
                        .id == selectedPlant.id ? (
                        <label
                          key={symptom.id}
                          className="flex items-center space-x-3 mb-3"
                        >
                          <input
                            type="checkbox"
                            value={symptom.id}
                            onChange={handleCheckedSymptoms}
                            className="appearance-none bg-white h-5 w-5 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
                          />
                          <span className="text-gray-700 font-normal">
                            {symptom.attributes.description}
                          </span>
                        </label>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            ))}

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transform bg-green-600 rounded-md hover:bg-green-500">
              Diagnose
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Diagnose;
