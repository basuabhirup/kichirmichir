import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

const Sidebar: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
