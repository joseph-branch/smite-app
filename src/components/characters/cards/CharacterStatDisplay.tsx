type CharacterStatDisplayProps = {
  stat: string;
  value: any;
};

export const CharacterStatDisplay: React.FC<CharacterStatDisplayProps> = ({
  stat,
  value,
}) => {
  console.log(value);
  return (
    <div className="flex py-3 px-6">
      <div className="flex min-w-[1rem] max-w-[1rem] max-h-8 flex-1 justify-center items-center flex-col">
        <span className="mb-1 text-sm text-color-50">{stat}</span>
        <span className="font-semibold text-white">{value as number}</span>
      </div>
    </div>
  );
};
