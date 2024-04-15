"use client";
import Dexie from "dexie";

export const db = new Dexie("friendDatabase");
db.version(1).stores({
  friends: "++id, name, age, currentDate", // Primary key and indexed props
});
