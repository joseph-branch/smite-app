type BuildProps = {
  buildAuthor: string;
  buildDescription: string;
  tags: string[];
  items: any[];
};

export const Build: React.FC<BuildProps> = ({
  buildAuthor,
  buildDescription,
  tags,
  items,
}) => {
  return (
    <div className="bg-color-300 rounded flex flex-col lg:flex-row">
      <div className="flex border-r border-color-50 py-5 lg:py-0 lg:px-5 items-center justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Character Image"
          className="rounded-full h-6 w-6 justify-center flex items-center"
        />
      </div>
      <div className="flex flex-col gap-3 py-5 px-2">
        <div className="flex flex-col text-color-50 justify-center items-center">
          <span className="text-sm">{buildAuthor}</span>
          <span className="text-sm">{buildDescription}</span>
        </div>
        <div className="flex justify-center items-center">
          {tags && (
            <div className="flex flex-wrap gap-1">
              {tags.map((t) => (
                <span className="bg-color-50 text-color-700 text-xs font-semibold mr-2 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center grow p-5">
        {items && (
          <div className="flex justify-between flex-1 flex-wrap">
            {items.map((i) => (
              <div className="flex p-2">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Character Image"
                  className="rounded-full h-6 w-6 justify-center flex items-center"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
