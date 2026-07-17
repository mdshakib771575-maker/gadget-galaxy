import React from "react";

interface DashboardHeadingProps {
  title: string;
  description: string;
}
const DashboardHeading = ({title, description,}: DashboardHeadingProps) => {
  return (
    <div>
      <div className="ml-8 border-b border-white/5 pb-5">
        <h1 className="bg-gradient-to-r from-green-500 via-blue-600  bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
          {title}
        </h1>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default DashboardHeading;