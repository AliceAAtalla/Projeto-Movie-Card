import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import arrayMovies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={arrayMovies} />
    </div>
  );
}
// A prop criada dentro do MovieList recebe meu array dentro de data
export default App;
