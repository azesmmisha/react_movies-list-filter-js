import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareList(list, filterValue) {
  return [...list].filter(item => {
    const titleHas = item.title
      .toLowerCase()
      .includes(filterValue.toLowerCase());

    const descriptionHas = item.description
      .toLowerCase()
      .includes(filterValue.toLowerCase());

    return titleHas || descriptionHas;
  });
}

export const App = () => {
  const [filter, setFilter] = useState('');
  const visibleMovies = prepareList(moviesFromServer, filter);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => {
                  setFilter(e.target.value.trim());
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
