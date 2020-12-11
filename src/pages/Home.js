import React, { useState } from 'react';
import MainPageLaout from '../components/MainPageLayout';
import SearchResult from '../components/SearchResult';

import { getResult } from '../apiGet';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const [isSearchResult, setIsSearchResult] = useState(false);

    const isSearchOption = searchOption === 'shows';

    const handleSearchChange = e => {
        setSearchText(e.currentTarget.value);
    };

    const handleSearchOption = e => {
        const value = e.currentTarget.value;

        setSearchOption(value);
    };

    const handleSearchSubmit = async e => {
        e.preventDefault();

        // Loading before fetching.
        setIsSearchResult(true);

        const results = await getResult(
            `search/${searchOption}?q=${searchText}`
        );

        console.log(results);
        setSearchResult(results);
        setIsSearchResult(false);
    };

    return (
        <MainPageLaout>
            <div>
                <form>
                    <input
                        type="text"
                        name="searchText"
                        value={searchText}
                        onChange={handleSearchChange}
                        placeholder="Search for something"
                    />

                    <label htmlFor="shows">
                        Shows
                        <input
                            id="shows"
                            type="radio"
                            value="shows"
                            name="search-option"
                            checked={isSearchOption}
                            onChange={handleSearchOption}
                        />
                    </label>

                    <label htmlFor="people">
                        Actors
                        <input
                            id="people"
                            type="radio"
                            value="people"
                            name="search-option"
                            checked={!isSearchOption}
                            onChange={handleSearchOption}
                        />
                    </label>

                    <button type="submit" onClick={handleSearchSubmit}>
                        Search
                    </button>
                </form>
            </div>

            <div>
                {!isSearchResult ? (
                    <SearchResult searchResult={searchResult} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </MainPageLaout>
    );
};

export default Home;
