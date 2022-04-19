export default function TeamMember() {
  return (
    <div>
      <img
        className="object-cover rounded-xl aspect-square"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt=""
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
        John Doe
      </h1>

      <p className="mt-2 text-gray-500 capitalize">Full stack developer</p>
    </div>
  );
}
