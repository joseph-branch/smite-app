import { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Tier } from "../../src/components/tierlist/tier";
import { TierItem } from "../../src/components/tierlist/tierItem";

export const Tierlist: React.FC = () => {
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <div className="gap-3 flex flex-col">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Season Dropdown"
          className="flex pl-3 py-1.5 rounded-md outline-none text-base bg-color-200 text-color-50"
        />

        <input
          type="text"
          placeholder="Game Mode DropDown"
          className="flex pl-3 py-1.5 rounded-md outline-none text-base bg-color-200 text-color-50"
        />
      </div>

      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <div className="flex flex-1 flex-col lg:flex-row gap-5">
          <div className="flex grow flex-col gap-1">
            <Tier tierTitle="S+">
              <TierItem />
            </Tier>
            <Tier tierTitle="S-">
              <TierItem />
            </Tier>
            <Tier tierTitle="A+">
              <TierItem />
            </Tier>
            <Tier tierTitle="A-">
              <TierItem />
            </Tier>
            <Tier tierTitle="B+">
              <TierItem />
              <TierItem />
            </Tier>
            <Tier tierTitle="B-">
              <TierItem />
              <TierItem />
            </Tier>
            <Tier tierTitle="C+">
              <TierItem />
              <TierItem />
            </Tier>
            <Tier tierTitle="C-">
              <TierItem />
              <TierItem />
            </Tier>
            <Tier tierTitle="D+">
              <TierItem />
              <TierItem />
            </Tier>
            <Tier tierTitle="D-">
              <TierItem />
              <TierItem />
            </Tier>
          </div>

          <div className="flex flex-col">
            <Tier showHeader={false} tierTitle="Unranked Characters">
              <TierItem />
              <TierItem />
            </Tier>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Tierlist;
