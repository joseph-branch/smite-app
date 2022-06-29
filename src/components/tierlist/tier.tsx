import { Droppable } from "react-beautiful-dnd";

type TierProps = {
  showHeader?: boolean;
  tierTitle: string;
  tierColor?: string;
  children: React.ReactNode;
};

export const Tier: React.FC<TierProps> = ({
  showHeader = true,
  tierTitle,
  tierColor = "#ee4c58",
  children,
}) => {
  return (
    <Droppable droppableId="tier-1" type="character">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={`flex flex-1 ${
            snapshot.isDraggingOver ? "bg-color-100" : "bg-color-300"
          } rounded-lg`}
          {...provided.droppableProps}
        >
          <div className="flex rounded flex-1">
            {showHeader && (
              <div className="flex">
                <div
                  className="rounded-l-lg"
                  style={{ backgroundColor: tierColor }}
                >
                  <div className=" flex">
                    <span className="w-20 h-20 flex items-center justify-center font-semibold">
                      {tierTitle}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-wrap">{children}</div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
