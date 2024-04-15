"use client";
import { db } from "./db";
import { useState } from "react"; // useState from "react":

const AddFriendForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(21);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  async function addFriend() {
    if (name && age) {
      // Add the new friend!
      const id = await db.friends.add({
        name,
        age,
        currentDate: Date.now(),
      });

      setStatus(`Friend ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(age);
    } else {
      setError("Please enter a name and age");
      setStatus(`Failed to add${!name ? ", please enter a name" : ""}.`);
    }
  }

  return (
    <>
      <div className="flex flex-col py-4 text-center">
        <p className="w-xs captialize">{status}</p>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-600 rounded-md text-center"
          required
        />
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="border-2 border-gray-600 rounded-md text-center"
          required
        />
      </div>
      <button
        onClick={addFriend}
        className="bg-blue-600 px-8 py-2 mt-2 font-semibold rounded-xl text-white hover:bg-blue-700"
      >
        Add
      </button>
    </>
  );
};

export default AddFriendForm;
