const TeamMember = (props) => {
  return (
    <div>
      <img
        className="object-cover rounded-xl aspect-square h-64"
        src={
          props.image
            ? `http://localhost:1337${props.image}`
            : "team-member-placeholder.png"
        }
        alt=""
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
        {props.name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize">{props.job}</p>
    </div>
  );
};

export default TeamMember;
