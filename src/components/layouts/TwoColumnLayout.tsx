import { Sidebar } from "../navigation/Sidebar";

type TwoColumnLayoutProps = {
  children: React.ReactNode;
};

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <Sidebar />
      <div className="p-10">
        <div className="flex flex-col w-[calc(100vw-21rem)] h-[calc(100vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
};
