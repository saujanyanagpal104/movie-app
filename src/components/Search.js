import React, { useState } from 'react';

const Search = ({setSearchResults}) => {
    const [searchText, setSearchText] = useState('');
    const [searchType, setSearchType] = useState('');
    const [isFetched, setIsFetched] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchType = (e) => {
        setSearchType(e.target.value);
    }

    const fetchSearchResults = async () => {
        setIsFetched(true);
        const fetchResults = await fetch(`https://www.omdbapi.com/?apikey=3a21a13a&i&s=${searchText}&type=${searchType}`).then(res => res.json());
        if(fetchResults.Response === 'True') {
            const results = fetchResults.Search;
            setIsError(false);
            setSearchResults(results);
        } else {
            setIsError(true);
            setError(fetchResults.Error);
        }
        setIsFetched(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchSearchResults();
    } 

    return (
        <div className='search-container'>
                <form>
                    <input type='text' value={searchText} onChange={handleSearch} placeholder='Type here to search...' />
                    <select value={searchType} onChange={handleSearchType}>
                        <option>All</option>
                        <option value='movie'>Movies</option>
                        <option value='series'>Series</option>
                        <option value='episode'>Episodes</option>
                    </select>
                    <button onClick={handleSubmit}>{isFetched ? 'SEARCHING...' : 'SEARCH'}</button>
                </form>
                {isError && <span className='error'>{error}</span>}
        </div>
    )
}

export default Search;