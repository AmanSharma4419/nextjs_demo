import React from "react";
import Image from "next/image";
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineUpload,
} from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
const FeedCard: React.FC = () => {
  return (
    <div className="flex  cursor-pointer p-4 border-b-[1px]">
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/50904581?v=4"
          alt="user image"
          height={100}
          width={100}
          className="rounded-full"
        />
      </div>
      <div className="pl-2 ">
        <div className="font-semibold">Aman Kumar Sharma</div>
        <p>
          Programming Wisdom @CodeWisdom · Aug 1, 2021 🧞‍♂️ "A computer is like a
          mischievous genie. It will give you exactly what you ask for, but not
          always what you want." — Joe Sondow
        </p>
        <div className="flex justify-between text-xl  pt-4">
          <BsChatLeft />
          <AiOutlineRetweet />
          <AiOutlineHeart />
          <AiOutlineUpload />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
