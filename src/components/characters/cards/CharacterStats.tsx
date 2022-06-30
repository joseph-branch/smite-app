export const CharacterStats: React.FC = () => {
  return (
    <div className="flex flex-1 p-2 rounded-lg border border-color-50">
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
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col items-center p-2">
            <span>{"Character Name"}</span>
            <span>{"Character Description"}</span>
            <span>{"Role/Pantheon/Fight Style/Attack Type"}</span>
          </div>
        </div>
        <div className="flex flex-1 items-center">
          {Array.from(Array(20)).map((a, index) => (
            <div className="flex flex-1 flex-col">
              <span>PP</span>
              <span>39</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
