import { Tab } from "@headlessui/react";
import { marked } from "marked";
import Sidebar from "../../components/Sidebar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const getServerSideProps = async (context) => {
  const plantUrl = `${process.env.URL_API}api/plants/${
    context.params.id
  }?${new URLSearchParams({
    populate: "*",
  })}`;

  const [plantRes] = await Promise.all([fetch(plantUrl)]);
  const [plant] = await Promise.all([plantRes.json()]);
  return { props: { plant } };
};

const PlantDetails = ({ plant }) => {
  const description = marked.parse(plant.data.attributes.description);
  const diseases = plant.data.attributes.diseases.data;

  return (
    <div className="flex">
      <Sidebar />
      <section className="container p-6 mx-auto bg-white">
        <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl col-span-full">
          Plant Details
        </h2>
        <div className="flex gap-x-2.5 mt-8">
          <img
            className="w-96 h-96 shadow-lg  rounded-md"
            src={
              plant.data.attributes.image.data
                ? `${
                    process.env.URL_API
                  }${plant.data.attributes.image.data.attributes.url.slice(1)}`
                : "/plant-placeholder.svg"
            }
            alt="Plant Image"
          />
          <div className="px-8 grow">
            <h1 className="mb-2 mx-2 font-semibold text-xl">
              {plant.data.attributes.name}
            </h1>
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-green-900/20 p-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-500",
                      selected
                        ? "bg-white shadow"
                        : "text-green-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Description
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-500",
                      selected
                        ? "bg-white shadow"
                        : "text-green-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Diseases
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className="rounded-xl p-3 bg-green-900/20">
                  <ul>
                    <li className="relative p-3 bg-white odd:bg-gray-100 first:rounded-t-md last:rounded-b-md">
                      <article
                        className="prose lg:prose-xl"
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></article>
                    </li>
                  </ul>
                </Tab.Panel>
                <Tab.Panel className="rounded-xl p-3 bg-green-900/20">
                  <ul>
                    {diseases.map((disease) => (
                      <li className="relative p-3 bg-white odd:bg-gray-100 first:rounded-t-md last:rounded-b-md">
                        <h3 className="text-sm font-medium leading-5">
                          {disease.attributes.name}
                        </h3>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlantDetails;
