import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import logo from "./twitter-icon.png"; // Tell webpack this JS file uses this image
import React from "react";
import SideBarRow from "./SideBarRow";

function SideBar() {
  return (
    <div className="col-span-2 item-center px-5 md:items-start py-4">
      <Image className="" src={logo} alt="logo" width="50px" height="50px" />
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmark" />
      <SideBarRow Icon={CollectionIcon} title="List" />
      <SideBarRow Icon={UserIcon} title="Sign in " />
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default SideBar;
