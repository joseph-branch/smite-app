import { Draggable } from "react-beautiful-dnd";

export const TierItem: React.FC = () => {
  return (
    <Draggable draggableId="tier-item-1" index={0}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-2 flex"
        >
          <h4 className="text-center">My draggable</h4>
        </div>
      )}
    </Draggable>
  );
};
