import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;
  return (
    <div className="w-48 p-5 shadow-lg">
      <ul>
        <Link to="/">
          <li>Home</li> 
        </Link>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold text-xl mt-3">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold text-xl mt-3">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
