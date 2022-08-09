import Image from "next/image";

type teamsProps = {
  name: String;
};

const Teams = ({ name }: teamsProps) => {
  return (
    <div className="mx-4">
      <div className="flex justify-center font-semibold text-xl mb-4">
        {name}
      </div>
      <div className="flex justify-center">
        <Image
          className="teamPicture"
          src="/SugarCane.jpeg"
          alt="Picture of the author"
          width="120px"
          height="120px"
        />
        <style jsx global>{`
          .teamPicture {
            border-radius: 50%;
          }
        `}</style>
      </div>
      <p className="mt-4 text-justify indent-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Teams;
