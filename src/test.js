import React, { useState } from "react";
import Desc from "./desc";

const Test = ({ id, image, name, type, hp, attack, defense, speed }) => {
  const style = `${type} poke`;

  const [show, setshow] = useState(false);

  return (
    <div>
      <div className={style}>
        <p className="id">ID: #{id}</p>
        <img src={image} alt="" />
        <p className="name">Name: {name.toUpperCase()}</p>
        <button className="btnShow" onClick={() => setshow(!show)}>
          Show Details . . .
        </button>
      </div>

      {show === true ? (
        <>
          <div className="highlight" onClick={() => setshow(!show)}></div>
          <Desc
            id={id}
            image={image}
            name={name}
            type={type}
            hp={hp}
            attack={attack}
            defense={defense}
            speed={speed}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Test;
