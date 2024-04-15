"use client";
import { db } from "./db";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks"; // useState from "react":

const FriendList = () => {
  const friends = useLiveQuery(() => db.friends.toArray());

  return (
    <ul className="w-[60%] dark:bg-[#414141] dark:text-black text-white rounded-xl">
      {friends?.map((friend) => (
        <li
          key={friend.id}
          className="flex justify-between dark:bg-[#414141] bg-gray-100 py-3 px-4 text-white rounded-lg"
        >
          <div className='text-black dark:text-white'>
            <span className="font-semibold text-lg">Name:</span> {friend.name}
            <br />
            <span className="font-semibold text-lg">Age:</span> {friend.age}
          </div>
          <button
            onClick={() => db.friends.delete(friend.id)}
            title="Delete item"
            className="bg-red-600 px-8 font-semibold text-sm rounded-xl text-white hover:bg-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
