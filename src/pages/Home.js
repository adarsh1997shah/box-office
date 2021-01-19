import React, { useEffect, useState } from 'react';
import MainPageLaout from '../components/MainPageLayout';
import SearchResult from '../components/SearchResult';

import { getResult } from '../apiGet';

import { Grid } from '../styles/styled';
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from '../styles/home.styled';

import { RadioWrapper } from '../styles/radio.styled';

const Home = () => {
  const [searchText, setSearchText] = useState(() => {
    if (sessionStorage.getItem('searchText')) {
      return sessionStorage.getItem('searchText');
    }
    return '';
  });
  const [searchOption, setSearchOption] = useState('shows');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isSearchOption = searchOption === 'shows';

  useEffect(() => {
    const init = async () => {
      // Loading before fetching.
      setIsLoading(true);

      const results = await getResult(
        `search/shows?q=${sessionStorage.getItem('searchText')}`
      );

      setSearchResult(results);
    };

    sessionStorage.getItem('searchText') ? init() : setSearchResult(null);
    setIsLoading(false);
  }, []);

  const handleSearchChange = e => {
    setSearchText(e.currentTarget.value);
  };

  const handleSearchOption = e => {
    const value = e.currentTarget.value;

    setSearchOption(value);
  };

  const handleSearchSubmit = async e => {
    e.preventDefault();

    if (searchText === '') {
      setSearchResult(null);
      return;
    }

    // Loading before fetching.
    setIsLoading(true);
    const results = await getResult(`search/${searchOption}?q=${searchText}`);

    setSearchResult(results);
    sessionStorage.setItem('searchText', searchText);
    setIsLoading(false);
  };

  return (
    <MainPageLaout>
      <div>
        <form autoComplete="off">
          <SearchInput
            type="text"
            name="searchText"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search for something"
          />

          <RadioInputsWrapper>
            <div>
              <RadioWrapper htmlFor="shows">
                Shows
                <input
                  id="shows"
                  type="radio"
                  value="shows"
                  name="search-option"
                  checked={isSearchOption}
                  onChange={handleSearchOption}
                />
                <span />
              </RadioWrapper>
            </div>

            <div>
              <RadioWrapper htmlFor="people">
                Actors
                <input
                  id="people"
                  type="radio"
                  value="people"
                  name="search-option"
                  checked={!isSearchOption}
                  onChange={handleSearchOption}
                />
                <span />
              </RadioWrapper>
            </div>
          </RadioInputsWrapper>

          <SearchButtonWrapper>
            <button type="submit" onClick={handleSearchSubmit}>
              Search
            </button>
          </SearchButtonWrapper>
        </form>
      </div>

      <Grid>
        {!isLoading ? (
          <SearchResult searchResult={searchResult} />
        ) : (
          'Loading...'
        )}
      </Grid>
    </MainPageLaout>
  );
};

export default Home;
