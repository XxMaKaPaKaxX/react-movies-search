import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext({});

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)

const StoreProvider = ({ children }) => {
    const [typeContent, setTypeContent] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [searchingUrl, setSearchingUrl] = useState(`http://www.omdbapi.com/?apikey=${API_KEY}&type=${typeContent}&page=${currentPage}&s=`);
    const [searchingResult, setSearchingResult] = useState([]);
    const [totalResults, setTotalResults] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSearchingUrl(`http://www.omdbapi.com/?apikey=${API_KEY}&type=${typeContent}&page=${currentPage}&s=`)
    }, [typeContent, currentPage])

    const fetchData = async (url) => {
        setLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        const { Search, totalResults } = data;
        setSearchingResult(Search);
        setTotalResults(totalResults ? totalResults : 0);
        setLoading(false);
    }

    return (
        <StoreContext.Provider value={{
            searchingUrl,
            setSearchingUrl,
            searchingResult,
            setSearchingResult,
            totalResults,
            setTotalResults,
            fetchData,
            typeContent,
            setTypeContent,
            loading

        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;

