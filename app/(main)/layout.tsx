import MobileHeader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";
import { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
