import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import hamburger from "../assets/hamburger.png";
import youtube_logo from "../assets/youtube-logo.webp";
import user_logo from "../assets/user-icon.jpg";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    /*
    make an api call on every searchQuery
    if the difference b/w 2 api call is <200ms 
    decline the api call this is debouncing
    */

    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery, {
      mode: "no-cors",
      headers: {
        "Sec-Fetch-Mode": "cors",
      },
    });
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      {/* Hamburger & Logo */}
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src={hamburger}
        />
        <img className="h-8 mx-2" src={youtube_logo} />
      </div>
      {/* Input & Search Btn */}
      <div className="col-span-10">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-8/12  border border-gray-400 p-2 px-5 rounded-l-full"
            type="text"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-gray-100 border border-gray-400 py-2 px-5 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions ? (
          <div className="fixed bg-white w-[38rem] py-2 px-5 rounded-lg shadow-lg ml-4 border border-gray-100 mt-1">
            <ul className="">
              {suggestions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {/* User Icon */}
      <div className="col-span-1">
        <img className="h-8" src={user_logo} />
      </div>
    </div>
  );
};

export default Head;
