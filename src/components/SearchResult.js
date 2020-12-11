import React from 'react';

const SearchResult = ({ searchResult }) => {
    return (
        <>
            {searchResult ? (
                searchResult.length ? (
                    searchResult[0].show ? (
                        searchResult.map(item => {
                            return (
                                <div key={item.show.id}>{item.show.name}</div>
                            );
                        })
                    ) : (
                        searchResult.map(item => {
                            return (
                                <div key={item.person.id}>
                                    {item.person.name}
                                </div>
                            );
                        })
                    )
                ) : (
                    <div>No Result</div>
                )
            ) : (
                ''
            )}
        </>
    );
};

export default SearchResult;
