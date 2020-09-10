import React from 'react';

const Header = ({togglePage, currentPage}) => {

    const openHome = () => {
        togglePage(false);
    };

    const openFavourites = () => {
        togglePage(true)
    };

    return(
        <div className='header'>
            <span className={`header-tab ${!currentPage ? 'selected-tab' : ''}`} onClick={openHome}>HOME</span>
            <span className={`header-tab ${currentPage ? 'selected-tab' : ''}`} onClick={openFavourites}>FAVOURITES</span>
        </div>
    )
}

export default Header;