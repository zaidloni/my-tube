import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Live",
    "Cricket",
    "News",
    "Cooking",
    "Entertainment",
    "Football",
  ];
  return (
    <div className="flex">
      {list.map((e, i) => (
        <Button key={i} name={e} />
      ))}
      {/* <Button name="All" /> */}
      {/* <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Soccer" />
      <Button name="Cooking" /> */}
    </div>
  );
};

export default ButtonList;
