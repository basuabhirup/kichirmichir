import { PropsWithChildren } from "react";

const StickyWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="hidden lg:block w-[360px] self-end z-1 bottom-6">
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">{children}</div>
    </div>
  );
};

export default StickyWrapper;
