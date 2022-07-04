import { useState } from "react";
import useSWR, { SWRConfig } from "swr";
import Layout from "../../components/layouts/dashboard";
import PlantCard from "../../components/plants/PlantCard";
import Sort from "../../components/plants/Sort";

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

const Plants = () => {
  const { data } = useSWR(url, fetcher);

  const sort = [
    { id: 1, name: "Ascending", value: "asc" },
    { id: 2, name: "Descending", value: "desc" },
  ];
  const [selectedSort, setSelectedSort] = useState(sort[0]);

  return (
    <Layout title="Plant List">
      <section className="container p-6 mx-auto bg-white">
        <div className="grid grid-cols-2">
          <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl">
            Plant List
          </h2>

          <div className="justify-self-end">
            <Sort
              sort={sort}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {selectedSort.value == "asc"
              ? data.data.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    id={plant.id}
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
    </Layout>
  );
};

const Page = ({ fallback }) => {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    <SWRConfig value={{ fallback }}>
      <Plants />
    </SWRConfig>
  );
};

export default Page;
