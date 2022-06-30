import { useMemo, useState } from "react";
import {
  DragDropContext,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import { Tier } from "../../src/components/tierlist/tier";
import { TierItem } from "../../src/components/tierlist/tierItem";
import { Tiers } from "../../common/constants/tiers";

type TierListItem = {
  key: string;
  color: string;
  title: string;
  data: any[];
};

export const Tierlist: React.FC = () => {
  const [unrankedCharacters, setUnrankedCharacters] = useState<any>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  ]);

  const [tierList, setTierList] = useState<TierListItem[]>([]);

  useMemo(() => {
    const tierlistItems = Tiers.map((t) => {
      const tierItem: TierListItem = {
        key: t.name,
        color: t.color,
        title: t.title,
        data: [],
      };

      return tierItem;
    });

    setTierList(tierlistItems);
  }, []);

  const onDragEnd = (e: any) => {
    if (!e.destination) {
      return;
    }

    if (e.destination.droppableId !== "characters") {
      const tier = tierList.find((t) => t.key === e.destination.droppableId)!!;

      let newItems: any[] = [];

      if (e.source.droppableId !== "characters") {
        let sourceTier = tierList.find((t) => t.key === e.source.droppableId)
          ?.data!!;

        newItems = [...sourceTier];
        sourceTier.splice(e.source.index, 1);
      } else {
        newItems = [...unrankedCharacters];
      }

      const [removed] = newItems.splice(e.source.index, 1);
      newItems.splice(e.destination.index, 0, removed);

      tier.data.push(removed);

      setUnrankedCharacters(
        unrankedCharacters.filter((uc: any) => uc !== removed)
      );
    } else {
      let sourceTier = tierList.find((t) => t.key === e.source.droppableId)
        ?.data!!;

      if (!sourceTier) return;

      const [removed] = sourceTier.splice(e.source.index, 1);

      setUnrankedCharacters([...unrankedCharacters, removed]);
      sourceTier.splice(e.source.index, 1);
    }
  };

  return (
    <div className="gap-1.5 flex flex-col">
      <div className="flex flex-col md:flex-row gap-3 flex-1">
        <input
          type="text"
          placeholder="Season"
          className="flex pl-3 py-1.5 rounded-md outline-none text-base bg-color-200 text-color-50"
        />

        <input
          type="text"
          placeholder="Game Mode"
          className="flex pl-3 py-1.5 rounded-md outline-none text-base bg-color-200 text-color-50"
        />
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        {tierList.map((tier, index) => (
          <Tier
            id={tier.key}
            tierTitle={tier.title}
            tierColor={tier.color}
            key={`${tier.key}-${index}`}
          >
            {tier.data.map((t: any, index: number) => (
              <div
                className="flex p-2 text-color-50"
                key={`${tier.key}-${t}-${index}`}
              >
                <TierItem
                  id={`${t}-${index}`}
                  index={index}
                  key={`${t}-${index}`}
                >
                  <p className="flex flex-1 items-center">{`Characters ${t}`}</p>
                </TierItem>
              </div>
            ))}
          </Tier>
        ))}

        <Droppable droppableId="characters" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`flex flex-col flex-1 text-color-50 ${
                snapshot.isDraggingOver ? "bg-color-100" : "bg-color-300"
              } rounded-lg`}
              {...provided.droppableProps}
            >
              <div className="flex justify-center py-2">
                <h1 className="flex">Unranked Characters</h1>
              </div>
              <div className="rounded items-center flex-col text-color-50 overflow-hidden  p-2">
                <div className="block">
                  <div className="flex gap-1.5">
                    {unrankedCharacters.map((a: any, index: number) => (
                      <TierItem
                        id={`characters-${index}`}
                        index={index}
                        key={`characters-${index}`}
                      >
                        <p className="flex flex-1 items-center">{`Characters ${a}`}</p>
                      </TierItem>
                    ))}
                  </div>
                </div>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tierlist;

export async function getServerSideProps(context: any) {
  resetServerContext();
  return { props: { data: [] } };
}
