import Link from "next/link";

const PlantCard = (props) => {
  return (
    <div className="group max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <Link href={`/plants/${props.id}`}>
        <a>
          <img
            className="object-cover w-80 h-56"
            src={
              props.image
                ? `${process.env.URL_API}${props.image}`
                : "plant-placeholder.svg"
            }
            alt=""
          />

          <div className="py-5 text-center group-hover:bg-green-500">
            <span className="block text-2xl font-bold text-gray-800 group-hover:text-white">
              {props.name}
            </span>
            <span className="text-sm text-gray-700 group-hover:text-white italic">
              {props.latin_name}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PlantCard;
