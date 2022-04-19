import PlantCard from "../components/dashboard/PlantCard";
import Sidebar from "../components/dashboard/Sidebar";
import Sort from "../components/dashboard/Sort";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <section className="container p-6 mx-auto bg-white">
        <div className="grid grid-cols-2">
          <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl">
            Plant List
          </h2>
          <Sort />
        </div>

        <div className="flex items-center justify-center">
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <PlantCard />
          </div>
        </div>
      </section>
    </div>
  );
}
