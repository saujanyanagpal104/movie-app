import React, { useState } from 'react';

const MovieCard = ({favourites, movieDetails, setFavourites, parentComponent}) => {
    const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);
    
    const {Poster, Title, Year, imdbID} = movieDetails;

    const addToFavourite = () => {
        if(!isAddedToFavourite) {
            const isExist = favourites.filter((fav) => fav.imdbID === imdbID);
            setIsAddedToFavourite(true);
            if(!isExist.length) {
                setFavourites([...favourites, {Poster, Title, Year, imdbID}]);
            }
        } else {
            const removeFavourite = favourites.filter((fav) => fav.imdbID !== imdbID);
            setFavourites(removeFavourite);
            setIsAddedToFavourite(false);
        }
    }

    return (
        <div className='movie-card'>
            <div className='movie-details-container'>
            <div className='movie-poster'>
                <img src={Poster} alt={Title} />
            </div>
            <div className='movie-details'>
                <span className='movie-title'>
                    {Title}
                </span>
                <span className='movie-year'>
                    Year Of Release: {Year}
                </span>
            </div>
            </div>
            {parentComponent === 'SEARCH' && <span onClick={addToFavourite} className={`add-favourite-button ${isAddedToFavourite ? 'remove-favourite' : ''}`}>
                {isAddedToFavourite ? 'REMOVE FROM FAVOURITE' : 'ADD TO FAVOURITE'}
            </span>}
        </div>
    )
}

export default MovieCard;