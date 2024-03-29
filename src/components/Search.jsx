import React, { useState } from "react";
import Header from "./Header";
import { FiSearch } from "react-icons/fi";
import { BOOKS } from "@/data/Books";
import { PAPERS } from "@/data/Papers";
import { POPULAR_PRESS } from "@/data/PopularPress";
import { BROADCAST } from "@/data/Broadcast";
import { PRINTS } from "@/data/Print";
import { RECENT_PHD } from "@/data/RecentPHD";
import { RESEARCH } from "@/data/Research";
import Document from "./Document";

const DOCUMENTS = [
  ...[].concat(...Object.values(BOOKS)),
  ...[].concat(...Object.values(PAPERS)),
  ...[].concat(...Object.values(BROADCAST)),
  ...POPULAR_PRESS,
  ...PRINTS,
  ...RECENT_PHD,
  ...RESEARCH,
];
const Search = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-sonja-orange-100 w-full flex flex-col justify-center items-center h-[50vh]">
        <Header text="Search" />
        <div className="w-1/2 flex items-center bg-white text-2xl py-1 px-4 border-[1px] border-sonja-black rounded-full font-cormorant outline-none ">
          <FiSearch />
          <input
            className="focus:ring-0 focus:outline-none ml-1 w-full"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
      </div>
      {value && (
        <div className="w-9/12 divide-y-2 gap-2">
          {DOCUMENTS.filter(
            (document) =>
              (document.name &&
                document.name.toLowerCase().includes(value.toLowerCase())) ||
              (document.title &&
                document.title.toLowerCase().includes(value.toLowerCase()))
          ).map((document, index) => (
            <Document key={index} document={document} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
