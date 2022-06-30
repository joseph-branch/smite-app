import { Draggable } from "react-beautiful-dnd";

type TierItemProps = {
  children: React.ReactNode;
  id: string;
  index: number;
};

export const TierItem: React.FC<TierItemProps> = ({ children, id, index }) => {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-2 flex items-center justify-center border-4 border-color-100 rounded-lg"
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};
