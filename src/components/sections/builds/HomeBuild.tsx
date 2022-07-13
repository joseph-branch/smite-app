/* eslint-disable @next/next/no-img-element */
type HomeBuildProps = {
  sectionTitle: string;
};

export const HomeBuild: React.FC<HomeBuildProps> = ({ sectionTitle }) => {
  return (
    <>
      <div className="flex flex-1 gap-5 overflow-auto pb-3">
        {Array.from(Array(15)).map((a, index) => (
          <div
            className="p-2 rounded-lg border border-color-50 gap-3 flex-1 flex"
            key={index}
          >
            <div className="flex flex-col lg:flex-row lg:w-[14rem] flex-1">
              <div className="flex justify-center items-center">
                <div className="border-4 border-color-100 rounded-full flex justify-center items-center flex-col">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Character Build"
                    className="rounded-full h-5 w-5 justify-center flex items-center"
                  />
                </div>
              </div>

              <div className="flex flex-col p-2">
                <div className="flex items-center">
                  <span className="">{"Random Build"}</span>
                </div>

                <div className="flex items-center">
                  <span className="text-xs">{"Random Build Description"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
