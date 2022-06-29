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
      <div className="h-screen w-screen">
        <div className="container py-[2rem]">{children}</div>
      </div>
    </div>
  );
};
