"use client";
import { db } from "./db";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks"; // useState from "react":

const FriendList = () => {
  const friends = useLiveQuery(() => db.friends.toArray());

  return (
    <ul className="min-w-full">
      {friends?.map((friend) => (
        <li
          key={friend.id}
          className="flex justify-between bg-gray-100 p-3 mb-2 px-10"
        >
          <div>
            <span className="font-semibold">Name:</span> {friend.name}
            <br />
            <span className="font-semibold">Age:</span> {friend.age}
          </div>
          <button
            onClick={() => db.friends.delete(friend.id)}
            title="Delete item"
            className="bg-red-600 px-2 font-semibold text-sm rounded-xl text-white hover:bg-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
