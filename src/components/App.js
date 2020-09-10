import React, { useState, useEffect } from 'react';
import Home from './Home';
import FavouritesListing from './FavouritesListing';
import Header from './Header';
import '../styles/index.css';

const App = () => {
    const [togglePage, setTogglePage] = useState(false);
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')) || []);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    return (
        <div className='container'>
            <Header togglePage={setTogglePage} currentPage={togglePage} />
            <FavouritesListing favourites={favourites} togglePage={togglePage} setFavourites={setFavourites} /> 
            <Home searchResults={searchResults} setSearchResults={setSearchResults} setFavourites={setFavourites} favourites={favourites} togglePage={togglePage} />
        </div>
    )
}

export default App;