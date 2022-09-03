import React, { useState } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import "../styles/SearchBar.css";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearchHandler } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearchHandler(undefined);
    }
  };

  const onBtnClickHandler = () => {
    onSearchHandler(search)
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar Pokémon"
          value={search}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>

      <div>
        <button
          className="search-btn"
          onClick={search ? onBtnClickHandler : null}
        >
          <MdOutlineCatchingPokemon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
