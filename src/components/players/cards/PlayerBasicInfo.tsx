import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { Doughnut } from "react-chartjs-2";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PlayerBasicResult } from "../../../../common/types/player";
import { useCallback } from "react";

export type PlayerBasicInfoProps = {
  player: PlayerBasicResult;
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const PlayerBasicInfo: React.FC<PlayerBasicInfoProps> = ({ player }) => {
  const useDefaultImage = useCallback((ev: any) => {
    ev.target.src = "https://storage.googleapis.com/smite-images/default.jpg";
  }, []);

  const winLossData: number[] = [
    parseInt(player.wins ?? 0),
    parseInt(player.losses ?? 0),
  ];

  const data = {
    label: ["Win", "Loss"],
    datasets: [
      {
        backgroundColor: ["#009700", "#E81E00"],
        // borderColor: ["rgb(0,151,0, 0.1)", "rgb(232,30,0, 0.2)"],
        hoverOffset: 4,
        data: winLossData,
      },
    ],
  };

  const options = {
    elements: {
      arc: {
        weight: 1,
        borderWidth: 1.5,
      },
    },
    cutout: 140,
  };

  return (
    <Link href={`/players/${player.activePlayerId}`}>
      <div className="flex bg-color-500 rounded-md cursor-pointer flex-1">
        <div className="flex flex-row justify-center items-center">
          <img
            src={player.avatarUrl}
            alt={player.name}
            onError={useDefaultImage}
            className="justify-center flex items-center rounded-tl-md rounded-bl-md w-16"
          />
        </div>

        <div className="flex flex-1 md:flex-row flex-col cursor-pointer text-sm md:text-base p-2 gap-3">
          <div className="flex flex-col flex-1 items-center">
            <span className="text-left font-semibold text-white">
              {player.name}
            </span>
            {/* <span className="text-left text-color-50">
                {player.personalStatusMessage}
              </span> */}
            <span className="text-left text-color-200">
              Last Seen: {player?.lastLoginDatetime?.split("T")[0]}
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-end">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </Link>
  );
};
