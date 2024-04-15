// Based off of https://dexie.org/docs/Tutorial/React
import Image from "next/image";
import AddFriendForm from "./AddFriendForm";
import FriendList from "./FriendList";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center py-12">
        <h1 className="text-5xl font-bold capitalize text-center">
          A simple Dexie app in Next.js
        </h1>
        <h2 className="mt-10 text-xl font-bold">Add A Friend</h2>
        <AddFriendForm />
        <div className="w-full border-2 border-dashed mt-8"></div>
        <h2 className="pt-8 pb-4 text-xl font-bold">Friend List</h2>
        <FriendList />
      </div>
    </main>
  );
}
