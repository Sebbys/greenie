import { Tab } from "@headlessui/react";
import { marked } from "marked";
import Layout from "../../components/layouts/dashboard";
import Sidebar from "../../components/Sidebar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const getServerSideProps = async (context) => {
  const diseaseUrl = `${process.env.URL_API}api/diseases/${
    context.params.id
  }?${new URLSearchParams({
    populate: "*",
  })}`;

  const [diseaseRes] = await Promise.all([fetch(diseaseUrl)]);
  const [disease] = await Promise.all([diseaseRes.json()]);
  return { props: { disease } };
};

const DiseaseDetails = ({ disease }) => {
  const solution = marked.parse(
    disease.data.attributes.solution.data.attributes.description
  );
  const prevention = marked.parse(
    disease.data.attributes.prevention.data.attributes.description
  );
  const symptoms = disease.data.attributes.symptoms.data;

  return (
    <Layout title={disease.data.attributes.name}>
      <section className="container p-6 mx-auto bg-white">
        <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl col-span-full">
          Disease Details
        </h2>
        <div className="flex gap-x-2.5 mt-8">
          <img
            className="w-96 h-96 shadow-lg  rounded-md"
            src={
              disease.data.attributes.image.data
                ? `${
                    process.env.URL_API
                  }${disease.data.attributes.image.data.attributes.url.slice(
                    1
                  )}`
                : "/plant-placeholder.svg"
            }
            alt="Disease Image"
          />
          <div className="px-8 grow">
            <h1 className="mb-2 mx-2 font-semibold text-xl">
              {disease.data.attributes.name}
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
                  Symptoms
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
                  Prevention
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
                  Solution
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className="rounded-xl p-3 bg-green-900/20">
                  <ul>
                    {symptoms.map((symptom) => (
                      <li className="relative p-3 bg-white odd:bg-gray-100 first:rounded-t-md last:rounded-b-md">
                        <h3 className="text-sm font-medium leading-5">
                          {symptom.attributes.description}
                        </h3>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
                <Tab.Panel className="rounded-xl p-3 bg-green-900/20">
                  <ul>
                    <li className="relative p-3 bg-white odd:bg-gray-100 first:rounded-t-md last:rounded-b-md">
                      <article
                        className="prose lg:prose-xl"
                        dangerouslySetInnerHTML={{ __html: prevention }}
                      ></article>
                    </li>
                  </ul>
                </Tab.Panel>
                <Tab.Panel className="rounded-xl p-3 bg-green-900/20">
                  <ul>
                    <li className="relative p-3 bg-white odd:bg-gray-100 first:rounded-t-md last:rounded-b-md">
                      <article
                        className="prose lg:prose-xl"
                        dangerouslySetInnerHTML={{ __html: solution }}
                      ></article>
                    </li>
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiseaseDetails;
