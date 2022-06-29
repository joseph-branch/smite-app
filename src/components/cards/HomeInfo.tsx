type InfoCardProps = {
  info: string;
};

export const HomeInfo: React.FC<InfoCardProps> = ({ info }) => {
  return (
    <div className="py-2">
      <div className="bg-color-500 h-64 w-72 lg:h-72 lg:w-96 flex rounded-lg">
        <div className=" flex flex-1 p-5">
          <div className="bg-color-50 flex flex-1">
            <p className="text-color-500 flex flex-1 justify-center items-center">
              {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
