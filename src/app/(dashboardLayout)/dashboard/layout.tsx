import DashboardSidebar from "@/app/components/dashboard/DashboardSidebar";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex">
        <DashboardSidebar></DashboardSidebar>
      <div className="w-full max-w-5xl px-5 py-10">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
