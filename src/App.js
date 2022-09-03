import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData, searchPokemon } from "./api";
import "./App.css";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itensPerPage = 30;

  const onNextClick = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  const onPreviousClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const resp = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = resp.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
      setLoading(false);
      setTotalPages(Math.ceil(resp.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemon([result]);
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="search-pag">
        <SearchBar onSearchHandler={onSearchHandler} />
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
        />
      </div>
      {notFound ? (
        <div>Pokemon Not Found</div>
      ) : (
        <Pokedex pokemon={pokemon} loading={loading} />
      )}
    </div>
  );
}

export default App;
