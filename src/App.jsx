import './App.css';
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Home from "./components/Home";
import SearchEngine from "./components/SearchEngine";
import Characters from './components/Characters';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Link to="/">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick & Morty Proyect" />
      </Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SearchEngine" element={<SearchEngine />} />
        <Route path="/Characters" element={<Characters />} />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
