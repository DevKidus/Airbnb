import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FaHeart, FaStar } from "react-icons/fa";

function Room({ room }) {
  let [isLiked, setIsLiked] = useState(false);
  return (
    <div className="grid md:grid-cols-3 rounded-lg overflow-hidden shadow-md border cursor-pointer hover:opacity-80 transition-all duration-200">
      <img className="w-full h-52 object-cover" src={room.img} alt="" />
      <div className=" flex flex-col md:col-span-2 p-4">
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <span>{room.location}</span>
            <div
              className="text-2xl active:scale-50 transition-all duration-200 cursor-pointer"
              onClick={() => {
                setIsLiked(!isLiked);
              }}
            >
              {isLiked ? (
                <FaHeart className="text-red-500 scale-[.8] " />
              ) : (
                <BiHeart />
              )}
            </div>
          </div>
          <p className="font-bold text-[20px] mt-1 mb-3">{room.title}</p>
          <p>{room.description}</p>
        </div>
        <div className="flex w-full justify-between self-center mt-3">
          <div>
            <p className="font-semibold text-xl">{room.price}</p>
            <p className="font-semibold">{room.total}</p>
          </div>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mx-2" />
            {Math.round(room.star)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
