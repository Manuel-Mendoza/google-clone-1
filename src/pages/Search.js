import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {

  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("u clicked", input);
    if (!input.trim()) {
      console.log('el campo esta vacio')
      return
  }
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">

      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined"> Buscar en Google </Button>
          <Button variant="outlined">Probar Suerte</Button>
        </div>
      ) : (
          <div className="search__buttonsHidden">
          <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined"> Buscar en Google </Button>
          <Button variant="outlined">Probar Suerte</Button>
          </div>
      )}
    </form>
  );
}

export default Search;