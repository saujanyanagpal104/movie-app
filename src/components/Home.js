import React from 'react';
import Search from './Search';
import MoviesListing from './MoviesListing';

const Home = ({favourites, searchResults, setFavourites, setSearchResults, togglePage}) => {

    return (
        <div className={`home ${togglePage ? 'active' : ''}`}>
            <Search setSearchResults={setSearchResults} />
            <MoviesListing searchResults={searchResults} favourites={favourites} setFavourites={setFavourites} />
        </div>
    )
}

export default Home;