import Sidebar from "../components/Sidebar";

const Diagnose = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="container p-6 mx-auto bg-white">
        <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl">
          Plant List
        </h2>

        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li class="mr-2">
            <a
              href="#"
              aria-current="page"
              class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              Profile
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Dashboard
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Settings
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Contacts
            </a>
          </li>
          <li>
            <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Disabled
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Diagnose;
