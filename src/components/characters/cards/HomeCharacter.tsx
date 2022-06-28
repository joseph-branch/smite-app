/* eslint-disable @next/next/no-img-element */

export const HomeCharacter: React.FC = () => {
  return (
    <div className="p-2 rounded-lg border border-color-50 gap-3">
      <div className="flex flex-1 w-[14rem]">
        <div className="border-4 border-color-100 rounded-full">
          <img
            src="https://via.placeholder.com/150"
            alt="Character Image"
            className="rounded-full h-20 w-20"
          />
        </div>
        <div className="flex items-center p-2">
          <span>{"Character Name"}</span>
        </div>
      </div>
    </div>
  );
};
