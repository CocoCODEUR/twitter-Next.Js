import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function SideBarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit items-center space-x-2 py-4 px-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group ">
      <Icon className="h-6 w-6" />
      <p className="hidden md:inline-flex group-hover:text-twitter">{title}</p>
    </div>
  );
}

export default SideBarRow;
