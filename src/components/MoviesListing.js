import React from 'react';
import MovieCard from './MovieCard';

const MoviesListing = ({favourites, searchResults, setFavourites}) => {
    return (
        <div className='search-results-container'>
            {searchResults.map((result) => <MovieCard key={result.imdbID} movieDetails={result} favourites={favourites} setFavourites={setFavourites} parentComponent='SEARCH' />)}
        </div>
    )
}

export default MoviesListing;