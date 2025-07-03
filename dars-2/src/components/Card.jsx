import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="flex flex-col">
      <div className={`${props.bgColor} w-40 h-40 rounded-3xl m-2`}></div>
      <div className="p-4 rounded-2xl m-2 border border-slate-400 text-center w-70 h-auto">
        <img src={props.imgSrc} alt="404" />
        <h1 className="text-3xl">{props.title}</h1>
        <p>{props.description}</p>

        <Button color={props.btnBg} />
      </div>
    </div>
  );
};

export default Card;
