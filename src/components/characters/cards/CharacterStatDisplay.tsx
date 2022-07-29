type CharacterStatDisplayProps = {
  stat: string;
  value: any;
};

export const CharacterStatDisplay: React.FC<CharacterStatDisplayProps> = ({
  stat,
  value,
}) => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 justify-start items-start flex-col gap-1">
        <span className="text-sm text-color-50">{stat}</span>
        <span className="font-semibold text-white">{value as number}</span>
      </div>
    </div>
  );
};
