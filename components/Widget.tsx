import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widget() {
  return (
    <div className="col-span-3 mt-2 px-2  hidden lg:inline">
      <div className="flex item-center space-x-2   bg-slate-100 rounded-full p-3 m-2">
        <SearchIcon className="w-8 h-8 text-gray-400" />
        <input
          className="flex-1 outline-none bg-transparent"
          type="text"
          placeholder="Search ..."
          name=""
          id=""
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="JeanLouis145"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widget;
