/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

type CharacterStatsProps = {
  characterId: string | number;
};

export const CharacterStats: React.FC<CharacterStatsProps> = ({
  characterId,
}) => {
  const router = useRouter();

  return (
    <Link href={`/characters/${characterId}`}>
      <div className="flex flex-1= p-2 rounded-lg border border-color-50 cursor-pointer">
        <div className="flex flex-1 flex-col lg:flex-row justify-between">
          <div className="flex justify-center items-center">
            <div className="border-4 border-color-100 rounded-full flex justify-center items-center flex-col">
              <img
                src="https://via.placeholder.com/150"
                alt="Character Image"
                className="rounded-full h-16 w-16 justify-center flex items-center"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center p-2">
              <span className="text-center">{"Character Name"}</span>
              <span className="text-center">{"Character Description"}</span>
              <span className="text-center">
                {"Role/Pantheon/Fight Style/Attack Type"}
              </span>
            </div>
          </div>
          <div className="flex gap-3 text-color-800 overflow-auto pb-3 lg:pb-0 flex-wrap md:justify-start justify-center items-center">
            {Array.from(Array(15)).map((a, index) => (
              <div className="flex" key={index}>
                <div className="flex bg-color-300 flex-1 rounded justify-center items-center py-2 px-4 gap-3 flex-col">
                  <span>PP</span>
                  <span>39</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
