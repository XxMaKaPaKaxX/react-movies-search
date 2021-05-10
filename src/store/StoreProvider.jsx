import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {
    const url = `http://www.omdbapi.com/?apikey=76cc608b&s=matrix`;


    const [searchingResult, setSearchingResult] = useState([]);
    const [totalResults, setTotalResults] = useState();
    const fetchData = async () => {
        const response = await fetch(url);
        const { Search, totalResults } = await response.json();
        setSearchingResult(Search);
        setTotalResults(totalResults);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <StoreContext.Provider value={{
            searchingResult,
            setSearchingResult,
            totalResults,
            setTotalResults,
            fetchData,

        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;

