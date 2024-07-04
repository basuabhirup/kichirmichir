import { PropsWithChildren } from "react";

const FeedWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-1 relative top-0 pb-10">{children}</div>;
};

export default FeedWrapper;
