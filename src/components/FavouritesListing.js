import React from 'react';
import MovieCard from './MovieCard';

const FavouritesListing = ({favourites, togglePage, setFavourites}) => {
    return (
        <div className={`favourites-container ${togglePage ? '' : 'active'}`}>
            {favourites.map((result) => <MovieCard key={result.imdbID} movieDetails={result} favourites={favourites} parentComponent='FAVOURITE' setFavourites={setFavourites} />)}
        </div>
    )
}

export default FavouritesListing;