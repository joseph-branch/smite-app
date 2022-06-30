export const SelectedCharacter: React.FC = () => {
  return (
    <div className="flex flex-col bg-color-300 p-2 rounded justify-center items-center">
      <div className="flex py-2">
        <img
          src="https://via.placeholder.com/150"
          alt="Character Image"
          className="rounded-full h-72 w-72 justify-center flex items-center"
        />
      </div>
      <div className="py-5 border-y border-color-50">
        <span className="text-color-50">
          Role/Pantheon/Fight Style/Attack Type
        </span>
      </div>
      <div className="py-5">
        <span className="text-color-50">Lore</span>
      </div>

      <div className="flex flex-1 border-color-50 border-t w-72 justify-center items-center py-2">
        <div>
          <span className="text-color-100 flex-1 rounded-full flex justify-center items-center border-2 h-6 w-6 border-color-50">
            S
          </span>
        </div>
      </div>
    </div>
  );
};
