import { AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import {
  BiHomeCircle,
  BiHash,
  BiMessage,
  BiListUl,
  BiBookmarks,
} from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/feed";
interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  { title: "Home", icon: <BiHomeCircle className="text-4xl " /> },
  { title: "Explore", icon: <BiHash className="text-4xl " /> },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline className="text-4xl " />,
  },
  {
    title: "Messages",
    icon: <BiMessage className="text-4xl " />,
  },
  {
    title: "Lists",
    icon: <BiListUl className="text-4xl " />,
  },
  {
    title: "Bookmarks",
    icon: <BiBookmarks className="text-4xl " />,
  },
  {
    title: "Profile",
    icon: <AiOutlineUser className="text-4xl " />,
  },
  {
    title: "More",
    icon: <CiCircleMore className="text-4xl " />,
  },
];

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[30%] flex justify-center">
        <div className="h-4 w-4 pt-5">
          <AiOutlineTwitter className="text-4xl  hover:bg-gray-500 rounded-full p-[0.8px] transition-all cursor-pointer" />
          <ul className="pt-4">
            {sideBarMenuItems.map((items) => {
              return (
                <li className="flex flex-row pt-6" key={items.title}>
                  <span>{items.icon}</span>
                  <span className="text-[25px] ml-6  font-semibold font-sans">
                    {items.title}
                  </span>
                </li>
              );
            })}
            <div className="pt-6">
              <button className=" font-semibold font-sans px-20 py-4 bg-[rgb(28,155,239)] rounded-full w-fit">
                Tweet
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className="w-[40%] border-r-[0.2px] border-l-[0.2px] border-white-50">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="w-[30%]"></div>
    </div>
  );
}
