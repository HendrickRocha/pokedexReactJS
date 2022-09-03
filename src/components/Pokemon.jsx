import React, { useState } from "react";
import Types from "./Types";
import "../styles/Pokemon.css";
import "../styles/Types.css";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { id, name, types } = pokemon;
  const [bgType, setBgType] = useState();
  const toUpperName = name.charAt(0).toUpperCase() + name.slice(1);
  let ui;

  const changeBgType = (type) => {
    setBgType(type);
  };

  const url = (id) => {
    let concat;

    if (id < 10) {
      return (concat = "00" + id);
    } else if (id > 9 && id < 100) {
      return (concat = "0" + id);
    } else {
      return id;
    }
  };

  const img = (id) => {
    if (id > 10000) {
      id = pokemon.sprites.front_default;
    } else {
      id = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${url(
        id
      )}.png`;
    }
    return id;
  };

  const imgClass = (id)=>{
    if(id>10000){return 'img-high-id'}else{return ''}
  }

  const typeLength = (length) => {
    if (length == 1) {
      return (length = "type1");
    } else {
      return (length = "type2");
    }
  };

  return (
    <div className={`card-container card-bg-${bgType}`}>
      {/* <a target='_blank' href={`https://www.pokemon.com/br/pokedex/${name}`}> */}

      <div className="img-container">
        <img className={imgClass(id)} alt={name} src={img(id)} />
      </div>
      <div className={`stats-container card-stats-bgImg-${bgType}`}>
        <div className="label-container">
          <label>{toUpperName}</label>

          <label> n° {id}</label>
        </div>
        <div className={`pokemon-types ${typeLength(types.length)}`}>
          {types.map((type, index) => {
            if (type.slot == 1) ui = type.type.name;
            return (
              <Types
                type={type}
                key={index}
                changeBgType={changeBgType}
                firstType={ui}
              />
            );
          })}
        </div>
      </div>

      {/* </a> */}
    </div>
  );
};

export default Pokemon;
