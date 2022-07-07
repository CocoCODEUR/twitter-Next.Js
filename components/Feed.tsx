import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

function Feed() {
  return (
    <div className="col-span-7 lg:col-span-4">
      <div className="flex items-center justify-between">
        <div className=" p-5 pb-0 text-xl font-bold">Home</div>
        <RefreshIcon className="w-8 h-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
}

export default Feed;
