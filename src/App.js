import React, { useEffect, useState } from "react";
import Test from "./test";

const App = () => {
  const [pokemons, setpokemons] = useState([]);
  const [link, setlink] = useState("https://pokeapi.co/api/v2/pokemon/");

  const apiLink = async () => {
    const apiF = await fetch(link);
    const apiJ = await apiF.json();
    setlink(apiJ.next);
    // console.log(apiJ)

    function createPoke(res) {
      res.forEach(async (pk) => {
        const po = await fetch(`https://pokeapi.co/api/v2/pokemon/${pk.name}`);
        const poJ = await po.json();
        setpokemons((current) => [...current, poJ]);
      });
    }

    console.log('asdad')

    createPoke(apiJ.results);

    console.log(pokemons);
    // console.log(link);
  };

  useEffect(() => {
    apiLink();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Poke !</h1>
      </div>
      <div className="all">
        {pokemons.map((e, k) => (
          <Test
            key={k}
            id={e.id}
            name={e.name}
            type={e.types[0].type.name}
            image={e.sprites.other.dream_world.front_default}
            hp={e.stats[0].base_stat}
            attack={e.stats[1].base_stat}
            defense={e.stats[2].base_stat}
            speed={e.stats[5].base_stat}
          />
        ))}
      </div>
      <div className="more">
        <button onClick={apiLink}>Load More ...</button>
      </div>
    </>
  );
};

export default App;
