export default function PlantCard() {
  return (
    <div className="group max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <a href="#">
        <img
          className="object-cover w-full h-56"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <div className="py-5 text-center group-hover:bg-green-500">
          <span className="block text-2xl font-bold text-gray-800 group-hover:text-white">
            John Doe
          </span>
          <span className="text-sm text-gray-700 group-hover:text-white">
            Software Engineer
          </span>
        </div>
      </a>
    </div>
  );
}
