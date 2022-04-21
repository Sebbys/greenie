import { Icon } from "@iconify/react";

const Feature = (props) => {
  return (
    <div className="space-y-3">
      <span className="inline-block p-3 bg-green-100 rounded-xl">
        <Icon icon={props.icon} color="#22C55E" width="24" height="24" />
      </span>

      <h1 className="text-2xl font-semibold text-gray-700 capitalize">
        {props.name}
      </h1>

      <p className="text-gray-500">{props.description}</p>
    </div>
  );
};

export default Feature;
