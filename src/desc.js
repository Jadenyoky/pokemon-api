import React from "react";

const Desc = ({ id, image, name, type, hp, attack, defense, speed }) => {
  const style = `${type} pokeDesc`;

  return (
    <div className="desc">
      <div className={style}>
        <p className="descName">ID : #{id}</p>
        <img src={image} alt="" />
        <p className="descName">Name : {name.toUpperCase()}</p>
        <p className="descName">Type : {type}</p>
        <p className="descName">Hp : {hp}</p>
        <p className="descName">Attack : {attack}</p>
        <p className="descName">Defense : {defense}</p>
        <p className="descName">Speed : {speed}</p>
      </div>
    </div>
  );
};

export default Desc;
