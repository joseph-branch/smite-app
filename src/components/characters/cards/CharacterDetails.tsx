export const CharacterDetails: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex gap-3 text-color-50 overflow-auto pb-3 lg:pb-0 flex-wrap md:justify-start justify-center items-center">
        {Array.from(Array(12)).map((a, index) => (
          <div className="flex">
            <div className="flex bg-color-300 flex-1 rounded justify-center items-center py-2 px-4 gap-3">
              <span className="flex text-sm">PP</span>
              <span className="flex text-sm">39</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-1 gap-3">
        {Array.from(Array(5)).map((a, index) => (
          <div className="flex flex-col flex-1">
            <div className="bg-color-300 rounded flex gap-3 flex-1">
              <div className="flex border-r border-color-50 px-5 items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Character Image"
                  className="rounded-full h-6 w-6 justify-center flex items-center"
                />
              </div>
              <div className="flex py-2 flex-col">
                <span className="flex text-color-50 flex-1 items-center text-sm">{`Ability ${index}`}</span>
                <span className="flex text-color-50 flex-1 items-center text-xs">{`This is a description of the ability or something along those lines.`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
